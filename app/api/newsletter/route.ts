import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.email('Địa chỉ email không hợp lệ.'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: 'Dữ liệu không hợp lệ',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { email } = result.data;

    // Check if exists
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'Email này đã được đăng ký nhận tin.' },
        { status: 409 },
      );
    }

    // Save to DB
    await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json(
      { message: 'Đăng ký nhận tin thành công!' },
      { status: 201 },
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { message: 'Đã xảy ra lỗi hệ thống, vui lòng thử lại sau.' },
      { status: 500 },
    );
  }
}
