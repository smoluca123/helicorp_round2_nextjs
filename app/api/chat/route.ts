import { OpenRouter } from '@openrouter/sdk';
import laptopData from '@/lib/data/laptop-data.json';

export const maxDuration = 60;

// Build system prompt from laptop data JSON
function buildSystemPrompt(): string {
  const data = laptopData;
  return `Bạn là trợ lý tư vấn AI của ROG (Republic of Gamers), chuyên tư vấn về laptop ROG Zephyrus G14 GU405AW-SY029W (2026).

Nhiệm vụ của bạn:
- Tư vấn thông tin sản phẩm chính xác dựa trên dữ liệu thông số kỹ thuật được cung cấp
- Trả lời bằng tiếng Việt, thân thiện và chuyên nghiệp
- Nếu khách hỏi điều gì ngoài thông tin sản phẩm, hãy lịch sự dẫn họ về chủ đề laptop ROG G14
- Không bịa đặt thông tin ngoài dữ liệu được cung cấp

Thông tin sản phẩm đầy đủ:
${JSON.stringify(data, null, 2)}

Hướng dẫn trả lời:
- Trả lời ngắn gọn, đúng trọng tâm
- Khi nêu thông số kỹ thuật, hãy giải thích ý nghĩa thực tiễn để khách hiểu
- Có thể so sánh với máy cũ hoặc đối thủ nếu có thông tin trong FAQ
- Luôn nhiệt tình, sẵn sàng giúp đỡ`;
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const openrouter = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY ?? '',
  });

  // Convert UI messages to OpenRouter ChatMessages form
  const formattedMessages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }> = [
    { role: 'system', content: buildSystemPrompt() },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...messages.map((msg: any) => ({
      role: msg.role as 'user' | 'assistant',
      content:
        typeof msg.content === 'string'
          ? msg.content
          : // Handle parts array from AI SDK v7 UIMessage format
            (msg.parts
              ?.filter((p: { type: string }) => p.type === 'text')
              .map((p: { text: string }) => p.text)
              .join('') ?? ''),
    })),
  ];

  // Call OpenRouter with streaming — stream: true overload returns EventStream directly
  const eventStream = await openrouter.chat.send({
    chatRequest: {
      model: 'google/gemini-2.5-flash',
      messages: formattedMessages,
      stream: true,
    },
  });

  // Pipe EventStream into a ReadableStream of plain text (for TextStreamChatTransport)
  const readableStream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of eventStream) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  });
}
