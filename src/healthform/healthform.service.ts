import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HealthFormType } from './dto/healthform.dto';
import { HealthFormInput } from './input-healthform.input';
import { HealthFormInterface } from './interfaces/healthform.interface';

@Injectable()
export class HealthformService {
  constructor(
    @InjectModel('healthforms')
    private healthFormModel: Model<HealthFormInterface>,
  ) {}

  async getAllHealthForm(): Promise<HealthFormType[]> {
    return await this.healthFormModel.find();
  }

  async create(
    createHealthForm: HealthFormInput,
    files: string[],
  ): Promise<HealthFormType> {
    const createdForm = new this.healthFormModel({
      ...createHealthForm,
      attachments: files,
    });

    return await createdForm.save();
  }
}
