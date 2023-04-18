import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Бренд повинен складатись з літер кількість яких від 1 до 20',
        'string.required': 'Це поле обов\'язкове'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Мінімальне число - 0',
        'number.max': 'Максимальне число - 1000000',
        'number.required': 'Це поле обов\'язкове'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Мінімальний рік - 1990',
        'number.max': 'Максимальний - теперешній рік',
        'number.required': 'Це поле обов\'язкове'
    })

})
export {
    carValidator
}