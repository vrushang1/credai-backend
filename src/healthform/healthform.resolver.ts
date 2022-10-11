import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import * as path from 'path';
import * as fs from 'fs';
import { HealthFormType } from './dto/healthform.dto';
import { HealthformService } from './healthform.service';
import { HealthFormInput } from './input-healthform.input';

@Resolver((of) => HealthFormType)
export class HealthformResolver {
  constructor(private healthService: HealthformService) {}

  @Query((returns) => [HealthFormType])
  healthform(): Promise<HealthFormType[]> {
    return this.healthService.getAllHealthForm();
  }
  @Mutation((returns) => HealthFormType)
  async createHealthForm(
    @Args('input') input: HealthFormInput,
    @Args({ name: 'file', type: () => [GraphQLUpload] })
    files: Promise<FileUpload>[],
  ) {
    if (!fs.existsSync('./uploads')) {
      fs.mkdirSync('./uploads');
    }
    const uploadedFiles = await Promise.all(
      files.map(async (img: Promise<FileUpload>): Promise<Promise<string>> => {
        const { filename, mimetype, encoding, createReadStream } = await img;
        const stream = createReadStream();
        return new Promise((resolve, reject) => {
          stream
            .on('end', () => {
              console.log('ReadStream Ended');
            })
            .on('close', () => {
              console.log('ReadStream Closed');
            })
            .on('error', (err) => {
              console.error('ReadStream Error', err);
            })
            .pipe(createWriteStream(`./uploads/${filename}`))
            .on('end', () => {
              resolve('end');
            })
            .on('close', (img) => {
              console.log('WriteStream Closed');
              resolve(path.join(__dirname, `/uploads/${filename}`));
            })
            .on('error', (err) => {
              reject('error');
            });
        });
      }),
    );
    return this.healthService.create(input, uploadedFiles);
  }

  @Mutation((returns) => HealthFormType)
  async updateForm(
    @Args('id') id: string,
    @Args('input') input: HealthFormInput,
  ): Promise<HealthFormType> {
    return this.healthService.update(id, input);
  }

  @Mutation((returns) => HealthFormType)
  async deleteForm(@Args('id') id: string): Promise<HealthFormType> {
    return this.healthService.delete(id);
  }
}
