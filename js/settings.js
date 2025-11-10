// setting.js

// 各天気パターン
const WEATHER_LIST = {
  sunny: { text: "晴れ", className: "weather-sunny", img: "img/sun.png" },
  cloudy: { text: "曇り", className: "weather-cloudy", img: "img/cloud.png" },
  rain: { text: "雨", className: "weather-rain", img: "img/rain.png" },
  snow: { text: "雪", className: "weather-snow", img: "img/snow.png" },
  thunder: { text: "雷", className: "weather-thunder", img: "img/thunder.png" },
  fog: { text: "霧", className: "weather-fog", img: "img/fog.png" }
};

// 都道府県ごとの固定天気データ
const PREF_WEATHER = {
  "北海道": {
    today: {
      weather: WEATHER_LIST.snow,
      maxTemp: 10,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "2.5m" },
        { time: "18-24", precip: "30％", wind: "北", wave: "2.5m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.snow,
      maxTemp: 9,
      minTemp: 2,
      table: [
        { time: "0-6", precip: "20％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "0％", wind: "北西", wave: "1.5m" },
        { time: "18-24", precip: "30％", wind: "北西", wave: "1.5m" }
      ]
    }
  },
  "青森": {
    today: {
      weather: WEATHER_LIST.fog,
      maxTemp: 12,
      minTemp: 4,
      table: [
        { time: "0-6", precip: "20％", wind: "北", wave: "3m" },
        { time: "6-12", precip: "30％", wind: "北", wave: "3m" },
        { time: "12-18", precip: "40％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "50％", wind: "北", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 14,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "50％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "70％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "岩手": {
    today: {
      weather: WEATHER_LIST.snow,
      maxTemp: 12,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "1.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "1.5m" },
        { time: "12-18", precip: "40％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "10％", wind: "北", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 14,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2m" },
        { time: "12-18", precip: "20％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "10％", wind: "北", wave: "1m" }
      ]
    }
  },
  "宮城": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 16,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 14,
      minTemp: 7,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "秋田": {
    today: {
      weather: WEATHER_LIST.fog,
      maxTemp: 12,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "3m" },
        { time: "6-12", precip: "0％", wind: "北", wave: "3m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "10％", wind: "北", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.snow,
      maxTemp: 11,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "3m" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "4m" }
      ]
    }
  },
  "山形": {
    today: {
      weather: WEATHER_LIST.snow,
      maxTemp: 12,
      minTemp: 5,
      table: [
        { time: "0-6", precip: "30％", wind: "北", wave: "3m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "3m" },
        { time: "12-18", precip: "0％", wind: "北", wave: "3m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "3m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 14,
      minTemp: 6,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "3m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "3m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "0％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "福島": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 7,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 15,
      minTemp: 7,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1.5m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "1.5m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "0％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "茨城": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 16,
      minTemp: 8,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "20％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "2m" }
      ]
    }
  },
  "栃木": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "-" },
        { time: "6-12", precip: "10％", wind: "北", wave: "-" },
        { time: "12-18", precip: "10％", wind: "北", wave: "-" },
        { time: "18-24", precip: "20％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 17,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "南西", wave: "-" },
        { time: "6-12", precip: "20％", wind: "南西", wave: "-" },
        { time: "12-18", precip: "30％", wind: "南西", wave: "-" },
        { time: "18-24", precip: "40％", wind: "南西", wave: "-" }
      ]
    }
  },
  "群馬": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "2％", wind: "北", wave: "-" },
        { time: "6-12", precip: "40％", wind: "北", wave: "-" },
        { time: "12-18", precip: "60％", wind: "北", wave: "-" },
        { time: "18-24", precip: "60％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "70％", wind: "北西", wave: "-" },
        { time: "6-12", precip: "30％", wind: "北西", wave: "-" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "-" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "-" }
      ]
    }
  },
  "埼玉": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "-" },
        { time: "6-12", precip: "10％", wind: "北", wave: "-" },
        { time: "12-18", precip: "10％", wind: "北", wave: "-" },
        { time: "18-24", precip: "40％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 17,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "80％", wind: "北", wave: "-" },
        { time: "6-12", precip: "50％", wind: "北", wave: "-" },
        { time: "12-18", precip: "20％", wind: "北", wave: "-" },
        { time: "18-24", precip: "0％", wind: "北", wave: "-" }
      ]
    }
  },
  "千葉": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.thunder,
      maxTemp: 16,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "50％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "70％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "40％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "東京": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.thunder,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "60％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "80％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "20％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "0％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "神奈川": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 17,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "70％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "50％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "20％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "0％", wind: "北", wave: "1m" }
      ]
    }
  },
  "新潟": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "3m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "3m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.snow,
      maxTemp: 15,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "4m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "4m" },
        { time: "12-18", precip: "0％", wind: "北", wave: "3m" },
        { time: "18-24", precip: "0％", wind: "北", wave: "3m" }
      ]
    }
  },
  "富山": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 12,
      table: [
        { time: "0-6", precip: "10％", wind: "南", wave: "1m" },
        { time: "6-12", precip: "10％", wind: "南", wave: "1m" },
        { time: "12-18", precip: "40％", wind: "南", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    }
  },
  "石川": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2m" },
        { time: "12-18", precip: "40％", wind: "北", wave: "3m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "3m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 19,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "3m" },
        { time: "6-12", precip: "0％", wind: "北西", wave: "3m" },
        { time: "12-18", precip: "0％", wind: "北西", wave: "4m" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "4m" }
      ]
    }
  },
  "福井": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 15,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "2.5m" },
        { time: "6-12", precip: "20％", wind: "北", wave: "2.5m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北", wave: "1m" }
      ]
    }
  },
  "山梨": {
    today: {
      weather: WEATHER_LIST.thunder,
      maxTemp: 19,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "40％", wind: "北", wave: "-" },
        { time: "6-12", precip: "30％", wind: "北", wave: "-" },
        { time: "12-18", precip: "20％", wind: "北", wave: "-" },
        { time: "18-24", precip: "20％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "-" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "-" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "-" },
        { time: "18-24", precip: "40％", wind: "北西", wave: "-" }
      ]
    }
  },
  "長野": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "50％", wind: "北", wave: "-" },
        { time: "6-12", precip: "50％", wind: "北", wave: "-" },
        { time: "12-18", precip: "30％", wind: "北", wave: "-" },
        { time: "18-24", precip: "20％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 17,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "西", wave: "-" },
        { time: "6-12", precip: "20％", wind: "西", wave: "-" },
        { time: "12-18", precip: "30％", wind: "西", wave: "-" },
        { time: "18-24", precip: "40％", wind: "西", wave: "-" }
      ]
    }
  },
  "岐阜": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 17,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "60％", wind: "北", wave: "-" },
        { time: "6-12", precip: "60％", wind: "北", wave: "-" },
        { time: "12-18", precip: "50％", wind: "北", wave: "-" },
        { time: "18-24", precip: "80％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "100％", wind: "北", wave: "-" },
        { time: "6-12", precip: "80％", wind: "北", wave: "-" },
        { time: "12-18", precip: "50％", wind: "北", wave: "-" },
        { time: "18-24", precip: "40％", wind: "北", wave: "-" }
      ]
    }
  },
  "静岡": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 20,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "80％", wind: "北西", wave: "1.5m" },
        { time: "6-12", precip: "50％", wind: "北西", wave: "1.5m" },
        { time: "12-18", precip: "50％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "2.5m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "2.5m" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "30％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "愛知": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "2.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1.5m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "1.5m" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "三重": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "0％", wind: "北西", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1.5m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "1.5m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "滋賀": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "80％", wind: "北", wave: "-" },
        { time: "6-12", precip: "60％", wind: "北", wave: "-" },
        { time: "12-18", precip: "60％", wind: "北", wave: "-" },
        { time: "18-24", precip: "20％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 17,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "20％", wind: "北西", wave: "-" },
        { time: "6-12", precip: "50％", wind: "北西", wave: "-" },
        { time: "12-18", precip: "60％", wind: "北西", wave: "-" },
        { time: "18-24", precip: "60％", wind: "北西", wave: "-" }
      ]
    }
  },
  "京都": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "10％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 20,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "40％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "60％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "60％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "大阪": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 17,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 12,
      table: [
        { time: "0-6", precip: "40％", wind: "北東", wave: "0m" },
        { time: "6-12", precip: "40％", wind: "北東", wave: "0m" },
        { time: "12-18", precip: "70％", wind: "北東", wave: "1m" },
        { time: "18-24", precip: "80％", wind: "北東", wave: "1m" }
      ]
    }
  },
  "兵庫": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "西", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "西", wave: "0.5m" },
        { time: "12-18", precip: "20％", wind: "西", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "西", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 7,
      table: [
        { time: "0-6", precip: "40％", wind: "北西", wave: "0.5m" },
        { time: "6-12", precip: "40％", wind: "北西", wave: "0.5m" },
        { time: "12-18", precip: "60％", wind: "北西", wave: "0m" },
        { time: "18-24", precip: "70％", wind: "北西", wave: "0m" }
      ]
    }
  },
  "奈良": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 20,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "-" },
        { time: "6-12", precip: "10％", wind: "北", wave: "-" },
        { time: "12-18", precip: "10％", wind: "北", wave: "-" },
        { time: "18-24", precip: "20％", wind: "北", wave: "-" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 20,
      minTemp: 12,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "-" },
        { time: "6-12", precip: "10％", wind: "北", wave: "-" },
        { time: "12-18", precip: "10％", wind: "北", wave: "-" },
        { time: "18-24", precip: "40％", wind: "北", wave: "-" }
      ]
    }
  },
  "和歌山": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "1.5m" },
        { time: "6-12", precip: "0％", wind: "北", wave: "1.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 17,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "20％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "40％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "鳥取": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "2.5m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "2.5m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 8,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "2.5m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "2.5m" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "3m" },
        { time: "18-24", precip: "40％", wind: "北西", wave: "3m" }
      ]
    }
  },
  "島根": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.thunder,
      maxTemp: 14,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "40％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "40％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "60％", wind: "北西", wave: "3m" },
        { time: "18-24", precip: "40％", wind: "北西", wave: "3m" }
      ]
    }
  },
  "岡山": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "20％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "30％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "広島": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 12,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "01m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "01m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "南西", wave: "2m" },
        { time: "6-12", precip: "20％", wind: "南西", wave: "2m" },
        { time: "12-18", precip: "20％", wind: "南西", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "南西", wave: "1m" }
      ]
    }
  },
  "山口": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "2.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.thunder,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "60％", wind: "北", wave: "2.5m" },
        { time: "6-12", precip: "40％", wind: "北", wave: "2.5m" },
        { time: "12-18", precip: "40％", wind: "北", wave: "2.5m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "2.5m" }
      ]
    }
  },
  "徳島": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "0.5m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "20％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "0.5m" },
        { time: "18-24", precip: "40％", wind: "北", wave: "0.5m" }
      ]
    }
  },
  "香川": {
    today: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "0％", wind: "北西", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北西", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 8,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "20％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北", wave: "1m" }
      ]
    }
  },
  "愛媛": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "40％", wind: "北東", wave: "0.5m" },
        { time: "6-12", precip: "60％", wind: "北東", wave: "0.5m" },
        { time: "12-18", precip: "60％", wind: "北東", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北東", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.thunder,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "40％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "60％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "60％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "60％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "高知": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "10％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.sunny,
      maxTemp: 18,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北西", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "2m" },
        { time: "18-24", precip: "10％", wind: "北西", wave: "2m" }
      ]
    }
  },
  "福岡": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "50％", wind: "北", wave: "0.5m" },
        { time: "18-24", precip: "70％", wind: "北", wave: "0.5m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "70％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "90％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "90％", wind: "北西", wave: "0.5m" },
        { time: "18-24", precip: "50％", wind: "北西", wave: "0.5m" }
      ]
    }
  },
  "佐賀": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 9,
      table: [
        { time: "0-6", precip: "0％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "50％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "80％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "30％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "0％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "0％", wind: "北", wave: "1m" }
      ]
    }
  },
  "長崎": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 16,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "80％", wind: "北", wave: "2m" },
        { time: "6-12", precip: "60％", wind: "北", wave: "2m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 16,
      minTemp: 11,
      table: [
        { time: "0-6", precip: "10％", wind: "北西", wave: "1m" },
        { time: "6-12", precip: "0％", wind: "北西", wave: "1m" },
        { time: "12-18", precip: "0％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "0％", wind: "北西", wave: "1m" }
      ]
    }
  },
  "熊本": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 12,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 14,
      table: [
        { time: "0-6", precip: "50％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "60％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "0.5m" },
        { time: "18-24", precip: "10％", wind: "北", wave: "0.5m" }
      ]
    }
  },
  "大分": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 18,
      minTemp: 14,
      table: [
        { time: "0-6", precip: "2％", wind: "北", wave: "0.5m" },
        { time: "6-12", precip: "40％", wind: "北", wave: "0.5m" },
        { time: "12-18", precip: "70％", wind: "北西", wave: "1m" },
        { time: "18-24", precip: "70％", wind: "北西", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 18,
      minTemp: 12,
      table: [
        { time: "0-6", precip: "50％", wind: "北西", wave: "1.5m" },
        { time: "6-12", precip: "30％", wind: "北西", wave: "1.5m" },
        { time: "12-18", precip: "10％", wind: "北西", wave: "1.5m" },
        { time: "18-24", precip: "0％", wind: "北西", wave: "1.5m" }
      ]
    }
  },
  "宮崎": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 20,
      minTemp: 15,
      table: [
        { time: "0-6", precip: "0％", wind: "東", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "東", wave: "2m" },
        { time: "12-18", precip: "10％", wind: "東", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "東", wave: "2m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 22,
      minTemp: 14,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "1m" },
        { time: "6-12", precip: "20％", wind: "北", wave: "1m" },
        { time: "12-18", precip: "30％", wind: "北", wave: "1m" },
        { time: "18-24", precip: "40％", wind: "北", wave: "1m" }
      ]
    }
  },
  "鹿児島": {
    today: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 23,
      minTemp: 10,
      table: [
        { time: "0-6", precip: "30％", wind: "北東", wave: "1.5m" },
        { time: "6-12", precip: "30％", wind: "北東", wave: "1.5m" },
        { time: "12-18", precip: "20％", wind: "北東", wave: "1m" },
        { time: "18-24", precip: "20％", wind: "北東", wave: "1m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 22,
      minTemp: 14,
      table: [
        { time: "0-6", precip: "10％", wind: "北", wave: "2m" },
        { time: "6-12", precip: "10％", wind: "北", wave: "2m" },
        { time: "12-18", precip: "20％", wind: "北", wave: "2m" },
        { time: "18-24", precip: "20％", wind: "北", wave: "2m" }
      ]
    }
  },
  "沖縄": {
    today: {
      weather: WEATHER_LIST.rain,
      maxTemp: 25,
      minTemp: 21,
      table: [
        { time: "0-6", precip: "70％", wind: "東", wave: "4m" },
        { time: "6-12", precip: "80％", wind: "東", wave: "4m" },
        { time: "12-18", precip: "80％", wind: "東", wave: "4m" },
        { time: "18-24", precip: "80％", wind: "東", wave: "4m" }
      ]
    },
    tomorrow: {
      weather: WEATHER_LIST.cloudy,
      maxTemp: 22,
      minTemp: 20,
      table: [
        { time: "0-6", precip: "10％", wind: "東", wave: "3m" },
        { time: "6-12", precip: "20％", wind: "東", wave: "3m" },
        { time: "12-18", precip: "20％", wind: "北東", wave: "2m" },
        { time: "18-24", precip: "40％", wind: "北東", wave: "2m" }
      ]
    }
  }
};
