import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const services = [
    { slug: 'swedish-relaxation', name: 'Swedish Relaxation Massage', description: 'Long, flowing strokes for calm and tension relief.', bufferMins: 10 },
    { slug: 'deep-tissue', name: 'Deep Tissue Massage', description: 'Focused pressure for tight muscles and knots.', bufferMins: 15 },
    { slug: 'sports-massage', name: 'Sports Massage', description: 'Preparation, recovery and deeper sports-focused work.', bufferMins: 15 },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: {
        ...service,
      },
    });
  }

  await prisma.therapist.upsert({
    where: { id: 'therapist-1' },
    update: {},
    create: {
      id: 'therapist-1',
      name: 'Alicia',
      bio: 'Massage therapist specialising in relaxation and recovery.',
      active: true,
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
