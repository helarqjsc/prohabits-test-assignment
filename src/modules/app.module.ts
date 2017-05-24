import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { CommitmentsService } from '../components/CommitmentsService';
import { SequelizeService } from '../components/SequelizeService';

import { CommitmentsController } from '../controllers/CommitmentsController';

@Module({
    controllers: [ CommitmentsController ],
    components: [ CommitmentsService, SequelizeService ],
    exports: [  ],
})
export class ApplicationModule {
    // configure(consumer: MiddlewaresConsumer) {
    //     consumer.apply(CorsMiddleware)
    //             .forRoutes(CommitmentsController);
    // }
}