import * as Images from '../../assets/icons';
import {ImageSourcePropType} from 'react-native';

export type MainCategory = Category & {
  img: ImageSourcePropType;
};

export type Category = {
  name: string;
  id?: number;
  subcategories: Category[] | SubCategory[];
};

export type SubCategory = {
  name: string;
  categoryId: number;
};

export const categories: MainCategory[] = [
  {
    id: 1,
    name: 'Бытовая техника',
    img: Images.HouseholdAppliance,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
      {
        name: 'Техника для дома',
        subcategories: [
          {
            name: 'Пылесосы, пароочистители',
            categoryId: 3723,
          },
          {
            name: 'Стиральные, сушильные машины',
            categoryId: 3721,
          },
          {
            name: 'Утюги, отпариватели',
            categoryId: 3722,
          },
          {
            name: 'Швейные, вышивальные машины',
            categoryId: 3724,
          },
        ],
      },
      {
        name: 'Техника для кухни',
        subcategories: [
          {
            name: 'Вытяжки',
            categoryId: 3718,
          },
          {
            name: 'Мелкая техника',
            categoryId: 3716,
          },
          {
            name: 'Микроволновые печи, ростеры, мини-печи',
            categoryId: 3719,
          },
          {
            name: 'Плиты, духовки, варочные панели',
            categoryId: 3717,
          },
          {
            name: 'Посудомоечные машины',
            categoryId: 3714,
          },
          {
            name: 'Холодильники, морозильники',
            categoryId: 3715,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Электроника',
    img: Images.Electronics,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Электрические товары для дома',
    img: Images.ElectricBeautyProducts,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: 'Автотовары',
    img: Images.AutoProducts,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Сад, огород',
    img: Images.Garden,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Промтовары',
    img: Images.IndustrialProducts,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },

  {
    id: 7,
    name: 'Вода, напитки, соки, кофе и чай',
    img: Images.Drinks,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Товары для детей и мам',
    img: Images.ProductsForKidsAndMoms,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Алкоголь',
    img: Images.Alcohol,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },

  {
    id: 10,
    name: 'Овощи и фрукты',
    img: Images.FruitsAndVegetables,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Мясо, рыба, птица, колбасы',
    img: Images.Meats,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'Бакалея',
    img: Images.Grocery,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },

  {
    id: 13,
    name: 'Замороженные продукты',
    img: Images.FrozenFoods,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: 'Шоколад, сладости',
    img: Images.Sweets,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: 'Молочные продукты, яйца',
    img: Images.MilkProducts,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },

  {
    id: 16,
    name: 'Здоровое и спортивноепитание',
    img: Images.HealthyEating,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 17,
    name: 'Мебель',
    img: Images.Furniture,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
  {
    id: 18,
    name: 'Хлебобулочные изделия',
    img: Images.BakeryProducts,
    subcategories: [
      {
        name: 'Климатическая техника',
        subcategories: [
          {
            name: 'Вентиляторы',
            categoryId: 3729,
          },
          {
            name: 'Водонагреватели',
            categoryId: 3730,
          },
          {
            name: 'Кондиционеры',
            categoryId: 3728,
          },
          {
            name: 'Обогреватели, конвекторы, камины',
            categoryId: 3727,
          },
          {
            name: 'Увлажнители, очистители воздуха',
            categoryId: 3726,
          },
        ],
      },
    ],
  },
];
