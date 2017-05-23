import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { CommitmentsController } from '../controllers/CommitmentsController';

@Module({
    controllers: [ CommitmentsController ],
    components: [  ],
    exports: [  ],
})
export class ApplicationModule {}