import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  ADMIN = 'admin',
  SCORER = 'scorer',
}

export enum SubscriptionPlan {
  FREE = 'free',
  PRO = 'pro',
}

export enum SubscriptionStatus {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  CANCELED = 'canceled',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: UserRole, default: UserRole.SCORER })
  role: UserRole;

  @Prop({ enum: SubscriptionPlan, default: SubscriptionPlan.FREE })
  plan: SubscriptionPlan;

  @Prop({
    enum: SubscriptionStatus,
    default: SubscriptionStatus.INACTIVE,
  })
  planStatus: SubscriptionStatus;

  @Prop({ type: String, default: null })
  subscriptionId: string | null;

  @Prop({ type: Date, default: null })
  currentPeriodEnd: Date | null;

  @Prop({ default: false })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
