import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { GenreController } from './genre.controller'
import { GenreModel } from './genre.model'
import { GenreService } from './genre.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: GenreModel,
				schemaOptions: {
					collection: 'Genre',
				},
			},
		]),
	],
	controllers: [GenreController],
	providers: [GenreService],
})
export class GenreModule {}
