import { model, Schema } from 'mongoose';

const charactersSchema = new Schema(
  {
    _id: String,
    nickname: {
      type: String,
      required: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: String,
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

export const charactersCollection = model('characters', charactersSchema);
