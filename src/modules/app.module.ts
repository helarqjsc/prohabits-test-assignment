import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { CommitmentsService } from '../components/CommitmentsService';
import { SequelizeService } from '../components/SequelizeService';
import { UsersService } from '../components/UsersService';

import { CommitmentsController } from '../controllers/CommitmentsController';
import { UsersController } from '../controllers/UsersController';

@Module({
    controllers: [ CommitmentsController, UsersController ],
    components: [ CommitmentsService, SequelizeService, UsersService ],
    exports: [  ],
})
export class ApplicationModule {
    // configure(consumer: MiddlewaresConsumer) {
    //     consumer.apply(CorsMiddleware)
    //             .forRoutes(CommitmentsController);
    // }
}