import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';
import { AuthDto } from 'src/auth/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });
  afterAll(() => {
    app.close();
  });
  it.todo('should pass');
});

describe('Auth', () => {
  describe('SignUp', () => {
    it('Should sign up', () => {
      const dto: AuthDto = {
        email: 'bpfaff@gmail.com',
        password: 'testPassword',
      };
      return pactum
        .spec()
        .post('http://localhost:3333/auth/signup')
        .withBody(dto)
        .expectStatus(201);
    });
  });
  describe('SignIn', () => {
    it.todo('Should sign in');
  });
});

describe('User', () => {
  describe('Get current user', () => {});
  describe('Edit current user', () => {});
});

describe('BookMarks', () => {
  describe('Create bookmark', () => {});
  describe('Get bookmarks', () => {});
  describe('Get bookmark by id', () => {});
  describe('Edit bookmark by id', () => {});
  describe('Delete bookmark by id', () => {});
});
