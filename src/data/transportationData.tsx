export const transportationData = [
  {
    label: "Personal Vehichle",
    data: [
      {
        label: "More than 24000km",
        value: 12,
      },
      {
        label: "16000km - 24000km",
        value: 10,
      },
      {
        label: "1600km - 16000km",
        value: 6,
      },
      {
        label: "I don't have a personal vehichle",
        value: 0,
      },
    ],
  },
  {
    label: "Public Transportation",
    data: [
      {
        label: "More than 24000km",
        value: 12,
      },
      {
        label: "16000km - 24000km",
        value: 10,
      },
      {
        label: "1600km - 16000km",
        value: 6,
      },
      {
        label: "I don't use public transportation",
        value: 0,
      },
    ],
  },
];

export type transportationData = typeof transportationData;
