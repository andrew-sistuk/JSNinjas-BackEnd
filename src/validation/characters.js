import Joi from 'joi';

export const createCharacterSchema = Joi.object({
  nickname: Joi.string().min(3).max(30).required().messages({
    'string.base': '#label should be a string',
    'string.min': '#label should have at least {#limit} characters',
    'string.max': '#label should have at most {#limit} characters',
    'any.required': '#label is required',
  }),
  real_name: Joi.string().min(3).max(30).required().messages({
    'string.base': '#label should be a string',
    'string.min': '#label should have at least {#limit} characters',
    'string.max': '#label should have at most {#limit} characters',
    'any.required': '#label is required',
  }),
  origin_description: Joi.string().required().messages({
    'string.base': '#label should be a string',
    'any.required': '#label is required',
  }),
  superpowers: Joi.string().required().messages({
    'string.base': '#label should be a string',
    'any.required': '#label is required',
  }),
  catch_phrase: Joi.string().required().messages({
    'string.base': '#label should be a string',
    'any.required': '#label is required',
  }),
  image: Joi.array().messages({
    'array.base': '#label should be a string',
  }),
});

export const updateCharacterSchema = Joi.object({
  nickname: Joi.string().min(3).max(30).messages({
    'string.base': '#label should be a string',
    'string.min': '#label should have at least {#limit} characters',
    'string.max': '#label should have at most {#limit} characters',
  }),
  real_name: Joi.string().min(3).max(30).messages({
    'string.base': '#label should be a string',
    'string.min': '#label should have at least {#limit} characters',
    'string.max': '#label should have at most {#limit} characters',
  }),
  origin_description: Joi.string().messages({
    'string.base': '#label should be a string',
  }),
  superpowers: Joi.string().messages({
    'string.base': '#label should be a string',
  }),
  catch_phrase: Joi.string().messages({
    'string.base': '#label should be a string',
  }),
  image: Joi.array().messages({
    'array.base': '#label should be a string',
  }),
});
