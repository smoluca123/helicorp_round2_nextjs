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

function getInitials(email: string) {
  const namePart = email.split('@')[0];
  const parts = namePart.split(/[\.\-_]/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return namePart.substring(0, 2).toUpperCase();
}

export async function GET() {
  try {
    const totalCount = await prisma.newsletter.count();
    
    // get latest 4 subscribers
    const latestSubscribers = await prisma.newsletter.findMany({
      orderBy: { createdAt: 'desc' },
      take: 4,
      select: { email: true }
    });

    const defaultInitials = ['NT', 'LH', 'PD', 'TK'];
    let initials = latestSubscribers.map(sub => getInitials(sub.email));
    
    // Fill the rest with defaults if not enough
    if (initials.length < 4) {
      initials = [...initials, ...defaultInitials.slice(initials.length, 4)];
    }
    
    return NextResponse.json({ totalCount, initials });
  } catch (error) {
    console.error('Newsletter GET Error:', error);
    return NextResponse.json(
      { message: 'Đã xảy ra lỗi hệ thống.' },
      { status: 500 },
    );
  }
}
