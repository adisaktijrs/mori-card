const hiragana = [
    {
        id: 1,
        romaji: "ぁ",
        kana: "SMALL A",
    },
    {
        id: 2,
        romaji: "あ",
        kana: "A",
    },
    {
        id: 3,
        romaji: "ぃ",
        kana: "SMALL I",
    },
    {
        id: 4,
        romaji: "い",
        kana: "I",
    },
    {
        id: 5,
        romaji: "ぅ",
        kana: "SMALL U",
    },
    {
        id: 6,
        romaji: "う",
        kana: "U",
    },
    {
        id: 7,
        romaji: "ぇ",
        kana: "SMALL E",
    },
    {
        id: 8,
        romaji: "え",
        kana: "E",
    },
    {
        id: 9,
        romaji: "ぉ",
        kana: "SMALL O",
    },
    {
        id: 10,
        romaji: "お",
        kana: "O",
    },
    {
        id: 11,
        romaji: "か",
        kana: "KA",
    },
    {
        id: 12,
        romaji: "が",
        kana: "GA",
    },
    {
        id: 13,
        romaji: "き",
        kana: "KI",
    },
    {
        id: 14,
        romaji: "ぎ",
        kana: "GI",
    },
    {
        id: 15,
        romaji: "く",
        kana: "KU",
    },
    {
        id: 16,
        romaji: "ぐ",
        kana: "GU",
    },
    {
        id: 17,
        romaji: "け",
        kana: "KE",
    },
    {
        id: 18,
        romaji: "げ",
        kana: "GE",
    },
    {
        id: 19,
        romaji: "こ",
        kana: "KO",
    },
    {
        id: 20,
        romaji: "ご",
        kana: "GO",
    },
    {
        id: 21,
        romaji: "さ",
        kana: "SA",
    },
    {
        id: 22,
        romaji: "ざ",
        kana: "ZA",
    },
    {
        id: 23,
        romaji: "し",
        kana: "SI",
    },
    {
        id: 24,
        romaji: "じ",
        kana: "ZI",
    },
    {
        id: 25,
        romaji: "す",
        kana: "SU",
    },
    {
        id: 26,
        romaji: "ず",
        kana: "ZU",
    },
    {
        id: 27,
        romaji: "せ",
        kana: "SE",
    },
    {
        id: 28,
        romaji: "ぜ",
        kana: "ZE",
    },
    {
        id: 29,
        romaji: "そ",
        kana: "SO",
    },
    {
        id: 30,
        romaji: "ぞ",
        kana: "ZO",
    },
    {
        id: 31,
        romaji: "た",
        kana: "TA",
    },
    {
        id: 32,
        romaji: "だ",
        kana: "DA",
    },
    {
        id: 33,
        romaji: "ち",
        kana: "TI",
    },
    {
        id: 34,
        romaji: "ぢ",
        kana: "DI",
    },
    {
        id: 35,
        romaji: "っ",
        kana: "SMALL TU",
    },
    {
        id: 36,
        romaji: "つ",
        kana: "TU",
    },
    {
        id: 37,
        romaji: "づ",
        kana: "DU",
    },
    {
        id: 38,
        romaji: "て",
        kana: "TE",
    },
    {
        id: 39,
        romaji: "で",
        kana: "DE",
    },
    {
        id: 40,
        romaji: "と",
        kana: "TO",
    },
    {
        id: 41,
        romaji: "ど",
        kana: "DO",
    },
    {
        id: 42,
        romaji: "な",
        kana: "NA",
    },
    {
        id: 43,
        romaji: "に",
        kana: "NI",
    },
    {
        id: 44,
        romaji: "ぬ",
        kana: "NU",
    },
    {
        id: 45,
        romaji: "ね",
        kana: "NE",
    },
    {
        id: 46,
        romaji: "の",
        kana: "NO",
    },
    {
        id: 47,
        romaji: "は",
        kana: "HA",
    },
    {
        id: 48,
        romaji: "ば",
        kana: "BA",
    },
    {
        id: 49,
        romaji: "ぱ",
        kana: "PA",
    },
    {
        id: 50,
        romaji: "ひ",
        kana: "HI",
    },
    {
        id: 51,
        romaji: "び",
        kana: "BI",
    },
    {
        id: 52,
        romaji: "ぴ",
        kana: "PI",
    },
    {
        id: 53,
        romaji: "ふ",
        kana: "HU",
    },
    {
        id: 54,
        romaji: "ぶ",
        kana: "BU",
    },
    {
        id: 55,
        romaji: "ぷ",
        kana: "PU",
    },
    {
        id: 56,
        romaji: "へ",
        kana: "HE",
    },
    {
        id: 57,
        romaji: "べ",
        kana: "BE",
    },
    {
        id: 58,
        romaji: "ぺ",
        kana: "PE",
    },
    {
        id: 59,
        romaji: "ほ",
        kana: "HO",
    },
    {
        id: 60,
        romaji: "ぼ",
        kana: "BO",
    },
    {
        id: 61,
        romaji: "ぽ",
        kana: "PO",
    },
    {
        id: 62,
        romaji: "ま",
        kana: "MA",
    },
    {
        id: 63,
        romaji: "み",
        kana: "MI",
    },
    {
        id: 64,
        romaji: "む",
        kana: "MU",
    },
    {
        id: 65,
        romaji: "め",
        kana: "ME",
    },
    {
        id: 66,
        romaji: "も",
        kana: "MO",
    },
    {
        id: 67,
        romaji: "ゃ",
        kana: "SMALL YA",
    },
    {
        id: 68,
        romaji: "や",
        kana: "YA",
    },
    {
        id: 69,
        romaji: "ゅ",
        kana: "SMALL YU",
    },
    {
        id: 70,
        romaji: "ゆ",
        kana: "YU",
    },
    {
        id: 71,
        romaji: "ょ",
        kana: "SMALL YO",
    },
    {
        id: 72,
        romaji: "よ",
        kana: "YO",
    },
    {
        id: 73,
        romaji: "ら",
        kana: "RA",
    },
    {
        id: 74,
        romaji: "り",
        kana: "RI",
    },
    {
        id: 75,
        romaji: "る",
        kana: "RU",
    },
    {
        id: 76,
        romaji: "れ",
        kana: "RE",
    },
    {
        id: 77,
        romaji: "ろ",
        kana: "RO",
    },
    {
        id: 78,
        romaji: "ゎ",
        kana: "SMALL WA",
    },
    {
        id: 79,
        romaji: "わ",
        kana: "WA",
    },
    {
        id: 80,
        romaji: "ゐ",
        kana: "WI",
    },
    {
        id: 81,
        romaji: "ゑ",
        kana: "WE",
    },
    {
        id: 82,
        romaji: "を",
        kana: "WO",
    },
    {
        id: 83,
        romaji: "ん",
        kana: "N",
    },
    {
        id: 84,
        romaji: "ゔ",
        kana: "VU",
    },
];

const hiragana1 = [
    {
        id: 0,
        romaji: "A",
        kana: "あ",
    },
    {
        id: 1,
        romaji: "I",
        kana: "い",
    },
    {
        id: 2,
        romaji: "U",
        kana: "う",
    },
    {
        id: 3,
        romaji: "E",
        kana: "え",
    },
    {
        id: 4,
        romaji: "O",
        kana: "お",
    },
    {
        id: 5,
        romaji: "KA",
        kana: "か",
    },
    {
        id: 6,
        romaji: "KI",
        kana: "き",
    },
    {
        id: 7,
        romaji: "KU",
        kana: "く",
    },
    {
        id: 8,
        romaji: "KE",
        kana: "け",
    },
    {
        id: 9,
        romaji: "KO",
        kana: "こ",
    },
    {
        id: 10,
        romaji: "SA",
        kana: "さ",
    },
    {
        id: 11,
        romaji: "SHI",
        kana: "し",
    },
    {
        id: 12,
        romaji: "SU",
        kana: "す",
    },
    {
        id: 13,
        romaji: "SE",
        kana: "せ",
    },
    {
        id: 14,
        romaji: "SO",
        kana: "そ",
    },
    {
        id: 15,
        romaji: "TA",
        kana: "た",
    },
    {
        id: 16,
        romaji: "CHI",
        kana: "ち",
    },
    {
        id: 17,
        romaji: "TSU",
        kana: "つ",
    },
    {
        id: 18,
        romaji: "TE",
        kana: "て",
    },
    {
        id: 19,
        romaji: "TO",
        kana: "と",
    },
    {
        id: 20,
        romaji: "NA",
        kana: "な",
    },
    {
        id: 21,
        romaji: "NI",
        kana: "に",
    },
    {
        id: 22,
        romaji: "NU",
        kana: "ぬ",
    },
    {
        id: 23,
        romaji: "NE",
        kana: "ね",
    },
    {
        id: 24,
        romaji: "NO",
        kana: "の",
    },
];

export { hiragana, hiragana1 };
