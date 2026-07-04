import { z } from 'zod';

export const TrackingEventSchema = z.object({
  eventType: z.enum(['click', 'scroll', 'view']),
  target: z.string(), // E.g., 'buy_button', 'performance_section'
  timestamp: z.number(),
  metadata: z
    .object({
      duration: z.number().optional(), // Duration in ms
      scrollDepth: z.number().optional(), // Scroll depth percentage (0-100)
      url: z.string().optional(),
    })
    .optional(),
});

export type TrackingEvent = z.infer<typeof TrackingEventSchema>;

export async function sendTrackingEvent(eventData: Omit<TrackingEvent, 'timestamp'>) {
  try {
    const fullEvent = {
      ...eventData,
      timestamp: Date.now(),
      metadata: {
        ...eventData.metadata,
        url: typeof window !== 'undefined' ? window.location.href : '',
      },
    };

    // Validate
    const validatedData = TrackingEventSchema.parse(fullEvent);

    // Send to Discord Webhook
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn('No Discord Webhook URL configured. Event not sent:', validatedData);
      return false; // Return false instead of throwing if running locally without .env
    }

    // Format for Discord Embed
    const embed = {
      title: `New Tracking Event: ${validatedData.eventType.toUpperCase()}`,
      color: 0x5865F2, // Discord Blurple
      fields: [
        { name: 'Target', value: validatedData.target, inline: true },
        { name: 'Event Type', value: validatedData.eventType, inline: true },
        { name: 'URL', value: validatedData.metadata?.url || 'N/A', inline: false },
      ],
      timestamp: new Date(validatedData.timestamp).toISOString(),
    };

    if (validatedData.metadata?.duration !== undefined) {
      embed.fields.push({
        name: 'Duration',
        value: `${(validatedData.metadata.duration / 1000).toFixed(2)}s`,
        inline: true,
      });
    }

    if (validatedData.metadata?.scrollDepth !== undefined) {
      embed.fields.push({
        name: 'Scroll Depth',
        value: `${Math.round(validatedData.metadata.scrollDepth)}%`,
        inline: true,
      });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send webhook: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('Tracking Error:', error);
    return false;
  }
}
