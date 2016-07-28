
// iChing.js

// All the models for the iChing and generation techniques etc are declared as variables and objects below.

// It would be great to tidy this up into a package that can be included that provides all that lookup functionality in a consolidated object.


// joolz iChing Code

iChing = {
  kingWenSeq: [  2, 23, 8,  20, 16, 35, 45, 12, 
                15, 52, 39, 53, 62, 56, 31, 33, 
                7,  4,  29, 59, 40, 64, 47, 6, 
                46, 18, 48, 57, 32, 50, 28, 44, 
                24, 27, 3,  42, 51, 21, 17, 25, 
                36, 22, 63, 37, 55, 30, 49, 13, 
                19, 41, 60, 61, 54, 38, 58, 10, 
                11, 26, 5,  9,  34, 14, 43,   1 
                ], // in order of their binary values as calculated with top as least significant bit

  kingWen: function (i) { // 
    if ( i <0 || i>63 ) return false;
    var kw = this.kingWenSeq[i];
    return this.hexagrams[kw-1];
  },

  fuHsi: function(i) {
    if ( i <1 || i>64 ) return false;
    return this.hexagrams[ this.kingWenSeq.indexOf(i) ];
  },

  lookup: function(i) {
    if ( i <1 || i>64 ) return false;
    return this.hexagrams[i-1];
  },

  hexagrams: [
      {
        "englishName": "the Creative Heaven",
        "description": "Hexagram 1 is named 乾 (qián), \"Force\". Other variations include \"the creative\", \"strong action\", \"the key\", and \"god\". Its inner (lower) trigram is ☰ (乾 qián) force = (天) heaven, and its outer (upper) trigram is the same.",
        "chineseChar": "乾",
        "unicode": "4DC0",        
        "symbol": "䷀",
        "index": 1,
      },
      {
        "englishName": "the Receptive Earth",
        "description": "Hexagram 2 is named 坤 (kūn), \"Field\". Other variations include \"the receptive\", \"acquiescence\", and \"the flow\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is identical.",
        "chineseChar": "坤",
        "unicode": "4DC1",
        "symbol": "䷁",
        "index": 2,
      },
      {
        "englishName": "Difficulty at the Beginning",
        "description": "Hexagram 3 is named 屯 (zhūn), \"Sprouting\". Other variations include \"difficulty at the beginning\", \"gathering support\", and \"hoarding\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "屯",
        "unicode": "4DC2",
        "symbol": "䷂",
        "index": 3,
      },
      {
        "englishName": "Youthful Folly",
        "description": "Hexagram 4 is named 蒙 (méng), \"Enveloping\". Other variations include \"youthful folly\", \"the young shoot\", and \"discovering\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water. Its outer trigram is ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "蒙",
        "unicode": "4DC3",
        "symbol": "䷃",
        "index": 4
      },
      {
        "englishName": "Waiting",
        "description": "Hexagram 5 is named 需 (xū), \"Attending\". Other variations include \"waiting\", \"moistened\", and \"arriving\". Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "需",
        "unicode": "4DC4",
        "symbol": "䷄",
        "index": 5
      },
      {
        "englishName": "Conflict",
        "description": "Hexagram 6 is named 訟 (sòng), \"Arguing\". Other variations include \"conflict\" and \"lawsuit\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "訟",
        "unicode": "4DC5",
        "symbol": "䷅",
        "index": 6
      },
      {
        "englishName": "the Army",
        "description": "Hexagram 7 is named 師 (shī), \"Leading\". Other variations include \"the army\" and \"the troops\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "師",
        "unicode": "4DC6",
        "symbol": "䷆",
        "index": 7
      },
      {
        "englishName": "Holding Together",
        "description": "Hexagram 8 is named 比 (bǐ), \"Grouping\". Other variations include \"holding together\" and \"alliance\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "比",
        "unicode": "4DC7",
        "symbol": "䷇",
        "index": 8
      },
      {
        "englishName": "Small Taming",
        "description": "Hexagram 9 is named 小畜 (xiǎo chù), \"Small Accumulating\". Other variations include \"the taming power of the small\" and \"small harvest\". Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "小畜",
        "unicode": "4DC8",
        "symbol": "䷈",
        "index": 9
      },
      {
        "englishName": "Treading",
        "description": "Hexagram 10 is named 履 (lǚ), \"Treading\". Other variations include \"treading (conduct)\" and \"continuing\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "履",
        "unicode": "4DC9",
        "symbol": "䷉",
        "index": 10
      },
      {
        "englishName": "Peace",
        "description": "Hexagram 11 is named 泰 (tài), \"Pervading\". Other variations include \"peace\" and \"greatness\". Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "泰",
        "unicode": "4DCA",
        "symbol": "䷊",
        "index": 11
      },
      {
        "englishName": "Standstill",
        "description": "Hexagram 12 is named 否 (pǐ), \"Obstruction\". Other variations include \"standstill (stagnation)\" and \"selfish persons\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "否",
        "unicode": "4DCB",
        "symbol": "䷋",
        "index": 12
      },
      {
        "englishName": "Fellowship",
        "description": "Hexagram 13 is named 同人 (tóng rén), \"Concording People\". Other variations include \"fellowship with men\" and \"gathering men\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "同人",
        "unicode": "4DCC",
        "symbol": "䷌",
        "index": 13
      },
      {
        "englishName": "Great Possession",
        "description": "Hexagram 14 is named 大有 (dà yǒu), \"Great Possessing\". Other variations include \"possession in great measure\" and \"the great possession\". Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "大有",
        "unicode": "4DCD",
        "symbol": "䷍",
        "index": 14
      },
      {
        "englishName": "Modesty",
        "description": "Hexagram 15 is named 謙 (qiān), \"Humbling\". Other variations include \"modesty\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "謙",
        "unicode": "4DCE",
        "symbol": "䷎",
        "index": 15
      },
      {
        "englishName": "Enthusiasm",
        "description": "Hexagram 16 is named 豫 (yù), \"Providing-For\". Other variations include \"enthusiasm\" and \"excess\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "豫",
        "unicode": "4DCF",
        "symbol": "䷏",
        "index": 16
      },
      {
        "englishName": "Following",
        "description": "Hexagram 17 is named 隨 (suí), \"Following\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "隨",
        "unicode": "4DD0",
        "symbol": "䷐",
        "index": 17
      },
      {
        "englishName": "Work on the Decayed",
        "description": "Hexagram 18 is named 蠱 (gŭ), \"Correcting\". Other variations include \"work on what has been spoiled (decay)\", decaying and \"branch\".[1] Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☶ (艮 gèn) bound = (山) mountain. Gu is the name of a venom-based poison traditionally used in Chinese witchcraft.",
        "chineseChar": "蠱",
        "unicode": "4DD1",
        "symbol": "䷑",
        "index": 18
      },
      {
        "englishName": "Approach",
        "description": "Hexagram 19 is named 臨 (lín), \"Nearing\". Other variations include \"approach\" and \"the forest\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "臨",
        "unicode": "4DD2",
        "symbol": "䷒",
        "index": 19
      },
      {
        "englishName": "Contemplation",
        "description": "Hexagram 20 is named 觀 (guān), \"Viewing\". Other variations include \"contemplation (view)\" and \"looking up\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "觀",
        "unicode": "4DD3",
        "symbol": "䷓",
        "index": 20
      },
      {
        "englishName": "Biting Through",
        "description": "Hexagram 21 is named 噬嗑 (shì kè), \"Gnawing Bite\". Other variations include \"biting through\" and \"biting and chewing\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "噬嗑 ",
        "unicode": "4DD4",
        "symbol": "䷔",
        "index": 21
      },
      {
        "englishName": "Grace",
        "description": "Hexagram 22 is named 賁 (bì), \"Adorning\". Other variations include \"grace\" and \"luxuriance\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "賁",
        "unicode": "4DD5",
        "symbol": "䷕",
        "index": 22
      },
      {
        "englishName": "Splitting Apart",
        "description": "Hexagram 23 is named 剝 (bō), \"Stripping\". Other variations include \"splitting apart\" and \"flaying\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "剝",
        "unicode": "4DD6",
        "symbol": "䷖",
        "index": 23
      },
      {
        "englishName": "Return",
        "description": "Hexagram 24 is named 復 (fù), \"Returning\". Other variations include \"return (the turning point)\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "復",
        "unicode": "4DD7",
        "symbol": "䷗",
        "index": 24
      },
      {
        "englishName": "Innocence",
        "description": "Hexagram 25 is named 無妄 (wú wàng), \"Without Embroiling\". Other variations include \"innocence (the unexpected)\" and \"pestilence\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "無妄",
        "unicode": "4DD8",
        "symbol": "䷘",
        "index": 25
      },
      {
        "englishName": "Great Taming",
        "description": "Hexagram 26 is named 大畜 (dà chù), \"Great Accumulating\". Other variations include \"the taming power of the great\", \"great storage\", and \"potential energy.\" Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "大畜",
        "unicode": "4DD9",
        "symbol": "䷙",
        "index": 26
      },
      {
        "englishName": "Mouth Corners",
        "description": "Hexagram 27 is named 頤 (yí), \"Swallowing\". Other variations include \"the corners of the mouth (providing nourishment)\", \"jaws\" and \"comfort/security\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "頤",
        "unicode": "4DDA",
        "symbol": "䷚",
        "index": 27
      },
      {
        "englishName": "Great Preponderance",
        "description": "Hexagram 28 is named 大過 (dà guò), \"Great Exceeding\". Other variations include \"preponderance of the great\", \"great surpassing\" and \"critical mass.\" Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "大過",
        "unicode": "4DDB",
        "symbol": "䷛",
        "index": 28
      },
      {
        "englishName": "the Abysmal Water",
        "description": "Hexagram 29 is named 坎 (kǎn), \"Gorge\". Other variations include \"the abyss\" (in the oceanographic sense) and \"repeated entrapment\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is identical.",
        "chineseChar": "坎",
        "unicode": "4DDC",
        "symbol": "䷜",
        "index": 29
      },
      {
        "englishName": "the Clinging Fire",
        "description": "Hexagram 30 is named 離 (lí), \"Radiance\". Other variations include \"the clinging, fire\" and \"the net\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is identical. The origin of the character has its roots in symbols of long-tailed birds such as the peacock or the legendary phoenix.",
        "chineseChar": "離",
        "unicode": "4DDD",
        "symbol": "䷝",
        "index": 30
      },
      {
        "englishName": "Influence",
        "description": "Hexagram 31 is named 咸 (xián), \"Conjoining\". Other variations include \"influence (wooing)\" and \"feelings\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "咸",
        "unicode": "4DDE",
        "symbol": "䷞",
        "index": 31
      },
      {
        "englishName": "Duration",
        "description": "Hexagram 32 is named 恆 (héng), \"Persevering\". Other variations include \"duration\" and \"constancy\". Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "恆",
        "unicode": "4DDF",
        "symbol": "䷟",
        "index": 32
      },
      {
        "englishName": "Retreat",
        "description": "Hexagram 33 is named 遯 (dùn), \"Retiring\". Other variations include \"retreat\" and \"yielding\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "遯",
        "unicode": "4DE0",
        "symbol": "䷠",
        "index": 33
      },
      {
        "englishName": "Great Power",
        "description": "Hexagram 34 is named 大壯 (dà zhuàng), \"Great Invigorating\". Other variations include \"the power of the great\" and \"great maturity\". Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "大壯",
        "unicode": "4DE1",
        "symbol": "䷡",
        "index": 34
      },
      {
        "englishName": "Progress",
        "description": "Hexagram 35 is named 晉 (jìn), \"Prospering\". Other variations include \"progress\" and \"aquas\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "晉",
        "unicode": "4DE2",
        "symbol": "䷢",
        "index": 35
      },
      {
        "englishName": "Darkening of the Light",
        "description": "Hexagram 36 is named 明夷 (míng yí), “Darkening of the Light.” Other variations are \"brilliance injured\" and \"intelligence hidden\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "明夷",
        "unicode": "4DE3",
        "symbol": "䷣",
        "index": 36
      },
      {
        "englishName": "the Family",
        "description": "Hexagram 37 is named 家人 (jiā rén), \"Dwelling People\". Other variations include \"the family (the clan)\" and \"family members\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "家人",
        "unicode": "4DE4",
        "symbol": "䷤",
        "index": 37
      },
      {
        "englishName": "Opposition",
        "description": "Hexagram 38 is named 睽 (kuí), \"Polarising\". Other variations include \"opposition\" and \"perversion\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "睽",
        "unicode": "4DE5",
        "symbol": "䷥",
        "index": 38
      },
      {
        "englishName": "Obstruction",
        "description": "Hexagram 39 is named 蹇 (jiǎn), \"Limping\". Other variations include \"obstruction\" and \"afoot\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "蹇",
        "unicode": "4DE6",
        "symbol": "䷦",
        "index": 39
      },
      {
        "englishName": "Deliverance",
        "description": "Hexagram 40 is named 解 (xiè), \"Taking-Apart\". Other variations include \"deliverance\" and \"untangled\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "解",
        "unicode": "4DE7",
        "symbol": "䷧",
        "index": 40
      },
      {
        "englishName": "Decrease",
        "description": "Hexagram 41 is named 損 (sǔn), \"Diminishing\". Other variations include \"decrease\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "損",
        "unicode": "4DE8",
        "symbol": "䷨",
        "index": 41
      },
      {
        "englishName": "Increase",
        "description": "Hexagram 42 is named 益 (yì), \"Augmenting\". Other variations include \"increase\". Its inner trigram is ☳ (震 zhèn) shake = (雷) thunder, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "益",
        "unicode": "4DE9",
        "symbol": "䷩",
        "index": 42
      },
      {
        "englishName": "Breakthrough",
        "description": "Hexagram 43 is named 夬 (guài), \"Displacement\" Other variations include \"resoluteness\", \"parting\", and \"break-through\". Its inner trigram is ☰ (乾 qián) force = (天) heaven, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "夬",
        "unicode": "4DEA",
        "symbol": "䷪",
        "index": 43
      },
      {
        "englishName": "Coming to Meet",
        "description": "Hexagram 44 is named 姤 (gòu), \"Coupling\". Other variations include \"coming to meet\" and \"meeting\". Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☰ (乾 qián) force = (天) heaven.",
        "chineseChar": "姤",
        "unicode": "4DEB",
        "symbol": "䷫",
        "index": 44
      },
      {
        "englishName": "Gathering Together",
        "description": "Hexagram 45 is named 萃 (cuì), \"Clustering\". Other variations include \"gathering together (massing)\" and \"finished\". Its inner trigram is ☷ (坤 kūn) field = (地) earth, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "萃",
        "unicode": "4DEC",
        "symbol": "䷬",
        "index": 45
      },
      {
        "englishName": "Pushing Upward",
        "description": "Hexagram 46 is named 升 (shēng), \"Ascending\". Other variations include \"pushing upward\". Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☷ (坤 kūn) field = (地) earth.",
        "chineseChar": "升",
        "unicode": "4DED",
        "symbol": "䷭",
        "index": 46
      },
      {
        "englishName": "Oppression",
        "description": "Hexagram 47 is named 困 (kùn), \"Confining\". Other variations include \"oppression (exhaustion)\" and \"entangled\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "困",
        "unicode": "4DEE",
        "symbol": "䷮",
        "index": 47
      },
      {
        "englishName": "the Well",
        "description": "Hexagram 48 is named 井 (jǐng), \"Welling\". Other variations include \"the well\". Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "井",
        "unicode": "4DEF",
        "symbol": "䷯",
        "index": 48
      },
      {
        "englishName": "Revolution",
        "description": "Hexagram 49 is named 革 (gé), \"Skinning\". Other variations including \"revolution (molting)\" and \"the bridle\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "革",
        "unicode": "4DF0",
        "symbol": "䷰",
        "index": 49
      },
      {
        "englishName": "the Cauldron",
        "description": "Hexagram 50 is named 鼎 (dǐng), \"Holding\". Other variations include \"the cauldron\". Its inner trigram is ☴ (巽 xùn) ground = (風) wind, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "鼎",
        "unicode": "4DF1",
        "symbol": "䷱",
        "index": 50
      },
      {
        "englishName": "the Arousing Thunder",
        "description": "Hexagram 51 is named 震 (zhèn), \"Shake\". Other variations include \"the arousing (shock, thunder)\" and \"thunder\". Both its inner and outer trigrams are ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "震",
        "unicode": "4DF2",
        "symbol": "䷲",
        "index": 51
      },
      {
        "englishName": "the Keeping Still Mountain",
        "description": "Hexagram 52 is named 艮 (gèn), \"Bound\". Other variations include \"keeping still, mountain\" and \"stilling\". Both its inner and outer trigrams are ☶ (艮 gèn) bound = (山) mountain.",
        "chineseChar": "艮",
        "unicode": "4DF3",
        "symbol": "䷳",
        "index": 52
      },
      {
        "englishName": "Development",
        "description": "Hexagram 53 is named 漸 (jiàn), \"Infiltrating\". Other variations include \"development (gradual progress)\" and \"advancement\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "漸",
        "unicode": "4DF4",
        "symbol": "䷴",
        "index": 53
      },
      {
        "englishName": "the Marrying Maiden",
        "description": "Hexagram 54 is named 歸妹 (guī mèi), \"Converting the Maiden\". Other variations include \"the marrying maiden\" and \"returning maiden\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "歸妹",
        "unicode": "4DF5",
        "symbol": "䷵",
        "index": 54
      },
      {
        "englishName": "Abundance",
        "description": "Hexagram 55 is named 豐 (fēng), \"Abounding\". Other variations include \"abundance\" and \"fullness\". Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "豐",
        "unicode": "4DF6",
        "symbol": "䷶",
        "index": 55
      },
      {
        "englishName": "the Wanderer",
        "description": "Hexagram 56 is named 旅 (lǚ), \"Sojourning\". Other variations include \"the wanderer\" and \"traveling\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "旅",
        "unicode": "4DF7",
        "symbol": "䷷",
        "index": 56
      },
      {
        "englishName": "the Gentle Wind",
        "description": "Hexagram 57 is named 巽 (xùn), \"Ground\". Other variations include \"the gentle (the penetrating, wind)\" and \"calculations\". Both its inner and outer trigrams are ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "巽",
        "unicode": "4DF8",
        "symbol": "䷸",
        "index": 57
      },
      {
        "englishName": "the Joyous Lake",
        "description": "Hexagram 58 is named 兌 (duì), \"Open\". Other variations include \"the joyous, lake\" and \"usurpation\". Both its inner and outer trigrams are ☱ (兌 duì) open = (澤) swamp.",
        "chineseChar": "兌",
        "unicode": "4DF9",
        "symbol": "䷹",
        "index": 58
      },
      {
        "englishName": "Dispersion",
        "description": "Hexagram 59 is named 渙 (huàn), \"Dispersing\". Other variations include \"dispersion (dissolution)\" and \"dispersal\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "渙",
        "unicode": "4DFA",
        "symbol": "䷺",
        "index": 59
      },
      {
        "englishName": "Limitation",
        "description": "Hexagram 60 is named 節 (jié), \"Articulating\". Other variations include \"limitation\" and \"moderation\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "節",
        "unicode": "4DFB",
        "symbol": "䷻",
        "index": 60
      },
      {
        "englishName": "Inner Truth",
        "description": "Hexagram 61 is named 中孚 (zhōng fú), \"Center Returning\". Other variations include \"inner truth\" and \"central return\". Its inner trigram is ☱ (兌 duì) open = (澤) swamp, and its outer trigram is ☴ (巽 xùn) ground = (風) wind.",
        "chineseChar": "中孚",
        "unicode": "4DFC",
        "symbol": "䷼",
        "index": 61
      },
      {
        "englishName": "Small Preponderance",
        "description": "Hexagram 62 is named 小過 (xiǎo guò), \"Small Exceeding\". Other variations include \"preponderance of the small\" and \"small surpassing\". Its inner trigram is ☶ (艮 gèn) bound = (山) mountain, and its outer trigram is ☳ (震 zhèn) shake = (雷) thunder.",
        "chineseChar": "小過",
        "unicode": "4DFD",
        "symbol": "䷽",
        "index": 62
      },
      {
        "englishName": "After Completion",
        "description": "Hexagram 63 is named 既濟 (jì jì), \"Already Fording\". Other variations include \"after completion\" and \"already completed\" or \"already done\" . Its inner trigram is ☲ (離 lí) radiance = (火) fire, and its outer trigram is ☵ (坎 kǎn) gorge = (水) water.",
        "chineseChar": "既濟",
        "unicode": "4DFE",
        "symbol": "䷾",
        "index": 63
      },
      {
        "englishName": "Before Completion",
        "description": "Hexagram 64 is named 未濟 (wèi jì), \"Not Yet Fording\". Other variations include \"before completion\" and \"not yet completed\". Its inner trigram is ☵ (坎 kǎn) gorge = (水) water, and its outer trigram is ☲ (離 lí) radiance = (火) fire.",
        "chineseChar": "未濟",
        "unicode": "4DFF",
        "symbol": "䷿",
        "index": 64
      }
    ],


  hexagramsToo: [
    {
      "id": "1",
      "name": "Ch'ien / The Creative",
      "character": "䷀",
      "trigrams": [
        1,
        1
      ],
      "judgement": "THE CREATIVE works sublime success,\nFurthering through perseverance.\n",
      "image": "The movement of heaven is full of power. \nThus the superior man makes himself strong and \nuntiring.\n",
      "lines": [
        {
          "description": "Hidden dragon. Do not act.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Dragon appearing in the field.\nIt furthers one to see the great man.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "All day long the superior man is creatively active.\nAt nightfall his mind is still beset with cares.\nDanger. No blame.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Wavering flight over the depths.\nNo blame.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Flying dragon in the heavens.\nIt furthers one to see the great man.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Arrogant dragon will have cause to repent.\nWhen all the lines are nines, it means:\nThere appears a flight of dragons without heads.\nGood fortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "2",
      "name": "K'un / The Receptive",
      "character": "䷁",
      "trigrams": [
        8,
        8
      ],
      "judgement": "THE RECEPTIVE brings about sublime success,\nFurthering through the perseverance of a mare.\nIf the superior man undertakes something and tries to lead,\nHe goes astray;\nBut if he follows, he finds guidance.\nIt is favorable to find friends in the west and south,\nTo forego friends in the east and north.\nQuiet perseverance brings good fortune.\n",
      "image": "The earth's condition is receptive devotion.\nThus the superior man who has breadth of character\nCarries the outer world.\n",
      "lines": [
        {
          "description": "When there is hoarfrost underfoot,\nSolid ice is not far off.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Straight, square, great.\nWithout purpose,\nYet nothing remains unfurthered.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Hidden lines.\nOne is able to remain persevering.\nIf by chance you are in the service of a king,\nSeek not works, but bring to completion.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "A tied-up sack. No blame, no praise.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "A yellow lower garment brings supreme good fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Dragons fight in the meadow.\nTheir blood is black and yellow.\nWhen all the lines are sixes, it means:\nLasting perseverance furthers.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "3",
      "name": "Chun / Difficulty at the Beginning",
      "character": "䷂",
      "trigrams": [
        4,
        6
      ],
      "judgement": "DIFFICULTY AT THE BEGINNING works supreme success,\nFurthering through perseverance.\nNothing should be undertaken.\nIt furthers one to appoint helpers.\n",
      "image": "Clouds and thunder:\nThe image of DIFFICULTY AT THE BEGINNING.\nThus the superior man\nBrings order out of confusion.\n",
      "lines": [
        {
          "description": "Hesitation and hindrance.\nIt furthers one to remain persevering.\nIt furthers one to appoint helpers.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Difficulties pile up.\nHorse and wagon part.\nHe is not a robber;\nHe wants to woo when the time comes.\nThe maiden is chaste,\nShe does not pledge herself.\nTen years--then she pledges herself.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Whoever hunts deer without the forester\nOnly loses his way in the forest.\nThe superior man understands the signs of the time\nAnd prefers to desist.\nTo go on brings humiliation.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Horse and wagon part.\nStrive for union.\nTo go brings good fortune.\nEverything acts to further.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Difficulties in blessing.\nA little perseverance brings good fortune.\nGreat perseverance brings misfortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Horse and wagon part.\nBloody tears flow.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "4",
      "name": "Mêng / Youthful Folly",
      "character": "䷃",
      "trigrams": [
        6,
        7
      ],
      "judgement": "YOUTHFUL FOLLY has success.\nIt is not I who seek the young fool;\nThe young fool seeks me.\nAt the first oracle I inform him. \nIf he asks two or three times, it is importunity.\nIf he importunes, I give him no information.\nPerseverance furthers.\n",
      "image": "A spring wells up at the foot of the mountain:\nThe image of YOUTH.\nThus the superior man fosters his character\nBy thoroughness in all that he does.\n",
      "lines": [
        {
          "description": "To make a fool develop\nIt furthers one to apply discipline.\nThe fetters should be removed.\nTo go on in this way bring humiliation.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "To bear with fools in kindliness brings good fortune.\nTo know how to take women\nBrings good fortune.\nThe son is capable of taking charge of the household.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Take not a maiden who. When she sees a man of bronze,\nLoses possession of herself.\nNothing furthers.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Entangled folly bring humiliation.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Childlike folly brings good fortune. \n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "In punishing folly\nIt does not further one\nTo commit transgressions.\nThe only thing that furthers \nIs to prevent transgressions.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "5",
      "name": "Hsü / Waiting (Nourishment)",
      "character": "䷄",
      "trigrams": [
        1,
        6
      ],
      "judgement": "WAITING. If you are sincere, \nYou have light and success.\nPerseverance brings good fortune.\nIt furthers one to cross the great water.\n",
      "image": "Clouds rise up to heaven:\nThe image of WAITING.\nThus the superior man eats and drinks,\nIs joyous and of good cheer. \n",
      "lines": [
        {
          "description": "Waiting in the meadow.\nIT furthers one to abide in what endures.\nNo blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Waiting on the sand.\nThere is some gossip.\nThe end brings good fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Waiting in the mud\nBrings about the arrival of the enemy.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Waiting in blood.\nGet out of the pit.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Waiting at meat and drink.\nPerseverance brings good fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "One falls into the pit.\nThree uninvited guests arrive.\nHonor them, and in the end there will be good fortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "6",
      "name": "Sung / Conflict",
      "character": "䷅",
      "trigrams": [
        6,
        1
      ],
      "judgement": "CONFLICT. You are sincere\nAnd are being obstructed.\nA cautious halt halfway brings good fortune.\nGoing through to the end brings misfortune.\nIt furthers one to see the great man.\nIt does not further one to cross the great water.\n",
      "image": "Heaven and water go their opposite ways:\nThe image of CONFLICT.\nThus in all his transactions the superior man\nCarefully considers the beginning.\n",
      "lines": [
        {
          "description": "If one does not perpetuate the affair,\nThere is a little gossip.\nIn the end, good fortune comes.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "One cannot engage in conflict;\nOne returns home, gives way.\nThe people of his town,\nThree hundred households, \nRemain free of guilt.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "To nourish oneself on ancient virtue induces perseverance.\nDanger. In the end, good fortune comes.\nIf by chance you are in the service of a king,\nSeek not works.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "One cannot engage in conflict.\nOne turns back and submits to fate,\nChanges one's attitude, \nAnd finds peace in perseverance.\nGood fortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "To contend before him\nBrings supreme good fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Even if by chance a leather belt is bestowed on one,'\nBy the end of a morning\nIt will have been snatched away three times.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "7",
      "name": "Shih / The Army",
      "character": "䷆",
      "trigrams": [
        6,
        8
      ],
      "judgement": "THE ARMY. The army needs perseverance\nAnd a strong man.\nGood fortune without blame.\n",
      "image": "In the middle of the earth is water:\nThe image of THE ARMY.\nThus the superior man increases his masses\nBy generosity toward the people.\n",
      "lines": [
        {
          "description": "An army must set forth in proper order.\nIf the order is not good, misfortune threatens.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "In the midst of the army.\nGood fortune. No blame.\nThe king bestows a triple decoration.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Perchance the army carries corpses in the wagon.\nMisfortune.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "The army retreats. No blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "There is game in the field.\nIt furthers one to catch it.\nWithout blame.\nLet the eldest lead the army.\nThe younger transports corpses;\nThen perseverance brings misfortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The great prince issues commands,\nFounds states, vests families with fiefs.\nInferior people should not be employed.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "8",
      "name": "Pi / Holding Together [union]",
      "character": "䷇",
      "trigrams": [
        8,
        6
      ],
      "judgement": "HOLDING TOGETHER brings good fortune.\nInquire of the oracle once again\nWhether you possess sublimity, constancy, and perseverance;\nThen there is no blame.\nThose who are uncertain gradually join.\nWhoever come too late\nMeets with misfortune.\n",
      "image": "On the earth is water:\nThe image of HOLDING TOGETHER.\nThus the kings of antiquity\nBestowed the different states as fiefs\nAnd cultivated friendly relations\nWith the feudal lords.\n",
      "lines": [
        {
          "description": "Hold to him in truth and loyalty;\nThis is without blame.\nTruth, like a full earthen bowl\"\nThus in the end\nGood fortune comes from without.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Hold to him inwardly.\nPerseverance brings good fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "You hold together with the wrong people.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Hold to him outwardly also.\nPerseverance brings good fortune.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Manifestation of holding together.\nIn the hunt the king uses beaters on three sides only\nAnd forgoes game that runs off in front.\nThe citizens need no warning.\nGood fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He finds no head for holding together.\nMisfortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "9",
      "name": "Hsiao Ch'u / The Taming Power of the Small",
      "character": "䷈",
      "trigrams": [
        1,
        5
      ],
      "judgement": "THE TAMING POWER OF THE SMALL\nHas success.\nDense clouds, no rain from our western region.\n",
      "image": "The wind drives across heaven:\nThe image of THE TAMING POWER OF THE SMALL.\nRefines the outward aspect of his nature.\n",
      "lines": [
        {
          "description": "Return to the way.\nHow could there be blame in this?\nGood fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "He allows himself to be drawn into returning.\nGood fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "The spokes burst out of the wagon wheels.\nMan and wife roll their eyes.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "If you are sincere, blood vanishes and fear gives way.\nNo blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "If you are sincere and loyally attached, \nYou are rich in your neighbor.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "The rain comes, there is rest.\nThis is due to the lasting effect of character.\nPerseverance brings the woman into danger.\nThe moon is nearly full.\nIf the superior man persists,\nMisfortune comes.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "10",
      "name": "Lü / Treading [conduct]",
      "character": "䷉",
      "trigrams": [
        2,
        1
      ],
      "judgement": "TREADING. Treading upon the tail of the tiger.\nIt does not bite the man. Success.\n",
      "image": "Heaven above, the lake below:\nThe image of TREADING.\nThus the superior man discriminates between high and low,\nAnd thereby fortifies the thinking of the people.\n",
      "lines": [
        {
          "description": "Simple conduct. Progress without blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Treading a smooth, level course.\nThe perseverance of a dark man\nBrings good fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "A one-eyed man is able to see,\nA lame man is able to tread.\nHe treads on the tail of the tiger.\nThe tiger bites the man.\nMisfortune.\nThus does a warrior act on behalf of his great prince.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "He treads on the tail of the tiger.\nCaution and circumspection\nLead ultimately to good fortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Resolute conduct.\nPerseverance with awareness of danger.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Look to your conduct and weigh the favorable signs.\nWhen everything is fulfilled, supreme good fortune comes.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "11",
      "name": "T'ai / Peace",
      "character": "䷊",
      "trigrams": [
        1,
        8
      ],
      "judgement": "PEACE. The small departs,\nThe great approaches.\nGood fortune. Success.\n",
      "image": "Heaven and earth unite: the image of PEACE.\nThus the ruler\nDivides and completes the course of heaven and earth,\nAnd so aids the people.\n",
      "lines": [
        {
          "description": "When ribbon grass is pulled up, the sod comes with it.\nEach according to his kind.\nUndertakings bring good fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Bearing with the uncultured in gentleness,\nFording the river with resolution,\nNot neglecting what is distant,\nNot regarding one's companions:\nThus one may manage to walk in the middle.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "No plain not followed by a slope.\nNo going not followed by a return.\nHe who remains persevering in danger\nIs without blame.\nDo not complain about this truth;\nEnjoy the good fortune you still possess.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "He flutters down, not boasting of his wealth,\nTogether with his neighbor,\nGuileless and sincere.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "The sovereign I\nGives his daughter in marriage.\nAnd supreme good fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The wall falls back into the moat.\nUse no army now.\nMake your commands known within your own town.\nPerseverance brings humiliation.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "12",
      "name": "P'i / Standstill [Stagnation]",
      "character": "䷋",
      "trigrams": [
        8,
        1
      ],
      "judgement": "STANDSTILL. Evil people do not further\nThe perseverance of the superior man.\nThe great departs; the small approaches.\n",
      "image": "Heaven and earth do not unite:\nThe image of STANDSTILL.\nThus the superior man falls back upon his inner worth \nIn order to escape the difficulties.\nHe does not permit himself to be honored with revenue.\n",
      "lines": [
        {
          "description": "When ribbon grass is pulled up, the sod comes with it.\nEach according to his kind.\nPerseverance brings good fortune and success.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "They bear and endure;\nThis means good fortune for inferior people.\nThe standstill serves to help the great man to attain success.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "They bear shame.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "He who acts at the command of the highest \nRemains without blame.\nThose of like mind partake of the blessing.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Standstill is giving way.\nGood fortune for the great man.\n\"What if it should fail, what if it should fail?\"\nIn this way he ties it to a cluster of mulberry shoots.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "The standstill comes to an end.\nFirst standstill, then good fortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "13",
      "name": "T'ung Jên / Fellowship with Men",
      "character": "䷌",
      "trigrams": [
        3,
        1
      ],
      "judgement": "FELLOWSHIP WITH MEN in the open.\nSuccess.\nIt furthers one to cross the great water.\nThe perseverance of the superior man furthers.\n",
      "image": "Heaven together with fire:\nThe image of FELLOWSHIP WITH MEN.\nThus the superior man organizes the clans\nAnd makes distinctions between things.\n",
      "lines": [
        {
          "description": "Fellowship with men at the gate.\nNo blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Fellowship with men in the clan.\nHumiliation.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "He hides weapons in the thicket;\nHe climbs the high hill in front of it.\nFor three years he does not rise up.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "He climbs up on his wall; he cannot attack.\nGood fortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Men bound in fellowship first weep and lament,\nBut afterward they laugh.\nAfter great struggles they succeed in meeting.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Fellowship with men in the meadow.\nNo remorse.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "14",
      "name": "Ta Yu / Possession in Great Measure",
      "character": "䷍",
      "trigrams": [
        1,
        3
      ],
      "judgement": "POSSESSION IN GREAT MEASURE.\nSupreme success.\n",
      "image": "Fire in heaven above:\nthe image of POSSESSION IN GREAT MEASURE.\nThus the superior man curbs evil and furthers good,\nAnd thereby obeys the benevolent will of heaven.\n",
      "lines": [
        {
          "description": "No relationship with what is harmful;\nThere is no blame in this.\nIf one remains conscious of difficulty,\nOne remains without blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "A big wagon for loading.\nOne may undertake something.\nNo blame.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "A prince offers it to the Son of Heaven.\nA petty man cannot do this.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "He makes a difference\nBetween himself and his neighbor.\nNo blame.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "He whose truth is accessible, yet dignified,\nHas good fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "He is blessed by heaven.\nGood fortune.\nNothing that does not further.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "15",
      "name": "Ch'ien / Modesty",
      "character": "䷎",
      "trigrams": [
        7,
        8
      ],
      "judgement": "MODESTY creates success.\nThe superior man carries things through.\n",
      "image": "Within the earth, a mountain:\nThe image of MODESTY.\nThus the superior man reduces that which is too much,\nAnd augments that which is too little.\nHe weighs things and makes them equal.\n",
      "lines": [
        {
          "description": "A superior man modest about his modesty\nMay cross the great water.\nGood fortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Modesty that comes to expression. Perseverance brings good fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "A superior man of modesty and merit\nCarries things to conclusion.\nGood fortune.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Nothing that would not further modesty\nIn movement.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "No boasting of wealth before one's neighbor. \nIt is favorable to attack with force.\nNothing that would not further.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Modesty that comes to expression.\nIt is favorable to set armies marching\nTo chastise one's own city and one's country.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "16",
      "name": "Yü / Enthusiasm",
      "character": "䷏",
      "trigrams": [
        8,
        4
      ],
      "judgement": "ENTHUSIASM. It furthers one to install helpers\nAnd to set armies marching.\n",
      "image": "Thunder comes resounding out of the earth:\nThe image of ENTHUSIASM.\nThus the ancient kings made music \nIn order to honor merit,\nAnd offered it with splendor\nTo the Supreme Deity,\nInviting their ancestors to be present.\n",
      "lines": [
        {
          "description": "Enthusiasm that expresses itself\nBrings misfortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Firm as a rock. Not a whole day.\nPerseverance brings good fortune.\nFirm as a rock, what need of a whole day?\nThe judgment can be known.\nThe superior man knows what is hidden and what is evident.\nHe knows weakness, he knows strength as well.\nHence the myriads look up to him.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Enthusiasm that looks upward creates remorse.\nHesitation brings remorse.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "The source of enthusiasm.\nHe achieves great things.\nDoubt not.\nYou gather friends around you\nAs a hair clasp gathers the hair.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Persistently ill, and still does not die.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Deluded enthusiasm.\nBut if after completion one changes, \nThere is no blame.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "17",
      "name": "Sui / Following",
      "character": "䷐",
      "trigrams": [
        4,
        2
      ],
      "judgement": "FOLLOWING has supreme success.\nPerseverance furthers. No blame.\n",
      "image": "Thunder in the middle of the lake:\nThe image of FOLLOWING.\nThus the superior man at nightfall\nGoes indoors for rest and recuperation.\n",
      "lines": [
        {
          "description": "The standard is changing.\nPerseverance brings good fortune.\nTo go out of the door in company\nProduces deeds.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "If one clings to the little boy,\nOne loses the strong man.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "If one clings to the strong man,\nOne loses the little boy.\nThrough following one finds what one seeks.\nIt furthers one to remain persevering.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Following creates success.\nPerseverance brings misfortune.\nTo go one's way with sincerity brings clarity.\nHow could there be blame in this?\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Sincere in the good. Good fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He meets with firm allegiance\nAnd is still further bound.\nThe king introduces him\nTo the Western Mountain.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "18",
      "name": "Ku / Work on what has been spoiled [ Decay ]",
      "character": "䷑",
      "trigrams": [
        5,
        7
      ],
      "judgement": "WORK ON WHAT HAS BEEN SPOILED\nHas supreme success.\nIt furthers one to cross the great water.\nBefore the starting point, three days.\nAfter the starting point, three days.\n",
      "image": "The wind blows low on the mountain:\nThe image of DECAY.\nThus the superior man stirs up the people\nAnd strengthens their spirit.\n",
      "lines": [
        {
          "description": "Setting right what has been spoiled by the father.\nIf there is a son, \nNo blame rests upon the departed father. \nDanger. In the end good fortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Setting right what has been spoiled by the mother.\nOne must not be too persevering.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Setting right what has been spoiled by the father.\nThere will be a little remorse. No great blame.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Tolerating what has been spoiled by the father.\nIn continuing one sees humiliation.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Setting right what has been spoiled by the father.\nOne meets with praise.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "He does not serve kings and princes,\nSets himself higher goals.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "19",
      "name": "Lin / Approach",
      "character": "䷒",
      "trigrams": [
        2,
        8
      ],
      "judgement": "APPROACH has supreme success.\nPerseverance furthers.\nWhen the eighth month comes,\nThere will be misfortune.\n",
      "image": "The earth above the lake:\nThe image of APPROACH.\nThus the superior man is inexhaustible\nIn his will to teach,\nAnd without limits\nIn his tolerance and protection of the people.\n",
      "lines": [
        {
          "description": "Joint approach.\nPerseverance brings good fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Joint approach.\nGood fortune.\nEverything furthers.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Comfortable approach.\nNothing that would further.\nIf one is induced to grieve over it,\nOne becomes free of blame.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Complete approach.\nNo blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Wise approach.\nThis is right for a great prince.\nGood fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Great hearted approach.\nGood-hearted approach.\nGood fortune. No blame.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "20",
      "name": "Kuan / Contemplation (View)",
      "character": "䷓",
      "trigrams": [
        8,
        5
      ],
      "judgement": "CONTEMPLATION. The ablution has been made, \nBut not yet the offering.\nFull of trust they look up to him.\n",
      "image": "The wind blows over the earth:\nThe image of CONTEMPLATION.\nThus the kings of old visited the regions of the world,\nContemplated the people,\nAnd gave them instruction.\n",
      "lines": [
        {
          "description": "Boy like contemplation.\nFor an inferior man, no blame.\nFor a superior man, humiliation.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Contemplation through the crack of the door.\nFurthering for the perseverance of a woman.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Contemplation of my life \nDecides the choice\nBetween advance and retreat.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Contemplation of the light of the kingdom.\nIt furthers one to exert influence as the guest of a king.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Contemplation of my life.\nThe superior man is without blame.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Contemplation of his life.\nThe superior man is without blame.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "21",
      "name": "Shih Ho / Biting Through",
      "character": "䷔",
      "trigrams": [
        4,
        3
      ],
      "judgement": "BITING THROUGH has success.\nIt is favorable to let justice be administered.\n",
      "image": "Thunder and lighting:\nThe image of BITING THROUGH.\nThus the kings of former times made firm the laws\nThrough clearly defined penalties.\n",
      "lines": [
        {
          "description": "His feet are fastened in the stocks,\nSo that his toes disappear.\nNo blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Bites through tender meat,\nSo that his nose disappears.\nNo blame.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Bites on old dried meat \nAnd strikes on something poisonous.\nSlight humiliation.  No blame.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Bites on dried gristly meat.\nReceives metal arrows.\nIt furthers one to be mindful of difficulties\nAnd to be persevering.\nGood fortune. \n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Bites on dried lean meat.\nReceives yellow gold.\nPerseveringly aware of danger.\nNo blame.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "His neck is fastened in the wooden cangue,\nSo that his ears disappear.\nMisfortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "22",
      "name": "Pi / Grace",
      "character": "䷕",
      "trigrams": [
        3,
        7
      ],
      "judgement": "GRACE has success.\nIn small matters\nIt is favorable to undertake something.\n",
      "image": "Fire at the foot of the mountain:\nThe image of GRACE.\nThus does the superior man proceed \nWhen clearing up current affairs.\nBut he dare not decide controversial issues in this way.\n",
      "lines": [
        {
          "description": "He lends grace to his toes, leaves the carriage, and walks.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Lends grace to the beard on his chin.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Graceful and moist.\nConstant perseverance brings good fortune.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Grace or simplicity?\nA white horse comes as if on wings.\nHe is not a robber,\nHe will woo at the right time.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Grace in the hills and gardens.\nThe roll of silk is meager and small.\nHumiliation, but in the end good fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Simple grace. No blame.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "23",
      "name": "Po / Splitting Apart",
      "character": "䷖",
      "trigrams": [
        8,
        7
      ],
      "judgement": "SPLITTING APART. IT does not further one \nTo go anywhere.\n",
      "image": "The mountain rests on the earth:\nThe image of SPLITTING APART.\nThus those above can ensure their position\nOnly by giving generously to those below.\n",
      "lines": [
        {
          "description": "The leg of the bed is split.\nThose who persevere are destroyed.\nMisfortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "The bed is split at the edge.\nThose who persevere are destroyed.\nMisfortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "He splits with them. No blame.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "The bed is split up to the skin.\nMisfortune.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "A shoal of fishes. Favor comes through the court ladies.\nEverything acts to further.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "There is a large fruit still uneaten.\nThe superior man receives a carriage.\nThe house of the inferior man is split apart.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "24",
      "name": "Fu / Return (The Turning Point)",
      "character": "䷗",
      "trigrams": [
        4,
        8
      ],
      "judgement": "RETURN. Success.\nGoing out and coming in without error.\nFriends come without blame.\nTo and fro goes the way.\nOn the seventh day comes return.\nIt furthers one to have somewhere to go.\n",
      "image": "Thunder within the earth:\nThe image of THE TURNING POINT.\t\nThus the kings of antiquity closed the passes \nAt the time of solstice.\nMerchants and strangers did not go about,\nAnd the ruler\nDid not travel through the provinces.\n",
      "lines": [
        {
          "description": "Return from a short distance.\nNo need for remorse.\nGreat good fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Quiet return. Good fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Repeated return. Danger. No blame.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Walking in the midst of others,\nOne returns alone.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Noblehearted return. No remorse.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Missing the return. Misfortune.\nMisfortune from within and without.\nIf armies are set marching in this way,\nOne will in the end suffer a great defeat, \nDisastrous for the ruler of the country.\nFor ten years\nIt will not be possible to attack again.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "25",
      "name": "Wu Wang / Innocence (The Unexpected)",
      "character": "䷘",
      "trigrams": [
        4,
        1
      ],
      "judgement": "INNOCENCE. Supreme success.\nPerseverance furthers.\nIf someone is not as he should be,\nHe has misfortune,\nAnd it does not further him\nTo undertake anything.\n",
      "image": "Under heaven thunder rolls:\nAll things attain the natural state of innocence.\nThus the kings of old,\nRich in virtue, and in harmony with the time,\nFostered and nourished all beings.\n",
      "lines": [
        {
          "description": "Innocent behavior brings good fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "If one does not count on the harvest while plowing,\nNor on the use of the ground while clearing it,\nIt furthers one to undertake something.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Undeserved misfortune.\nThe cow that was tethered by someone\nIs the wanderer's gain, the citizen's loss.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "He who can be persevering \nRemains without blame.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Use no medicine in an illness\nIncurred through no fault of your own.\nIt will pass of itself.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Innocent action brings misfortune.\nNothing furthers.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "26",
      "name": "Ta Ch'u / The Taming Power of the Great",
      "character": "䷙",
      "trigrams": [
        1,
        7
      ],
      "judgement": "THE TAMING POWER OF THE GREAT.\nPerseverance furthers.\nNot eating at home brings good fortune.\nIt furthers one to cross the great water.\n",
      "image": "Heaven within the mountain:\nThe image of THE TAMING POWER OF THE GREAT.\nThus the superior man acquaints himself with many sayings of antiquity\nAnd many deeds of the past,\nIn order to strengthen his character thereby.\n",
      "lines": [
        {
          "description": "Danger is at hand. It furthers one to desist.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "The axletrees are taken from the wagon.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "A good horse that follows others.\nAwareness of danger,\nWith perseverance, furthers.\nPractice chariot driving and armed defense daily. \nIt furthers one to have somewhere to go.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The headboard of a young bull.\nGreat good fortune.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "The tusk of a gelded boar.\nGood fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "One attains the way of heaven.\nSuccess.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "27",
      "name": "I / Corners of the Mouth (Providing Nourishment)",
      "character": "䷚",
      "trigrams": [
        4,
        7
      ],
      "judgement": "THE CORNERS OF THE MOUTH.\nPerseverance brings good fortune.\nPay heed to the providing of nourishment\nAnd to what a man seeks\nTo fill his own mouth with.\n",
      "image": "At the foot of the mountain, thunder:\nThe image of PROVIDING NOURISHMENT.\nThus the superior man is careful of his words\nAnd temperate in eating and drinking.\n",
      "lines": [
        {
          "description": "You let your magic tortoise go,\nAnd look at me with the corners of your mouth drooping.\nMisfortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Turning to the summit for nourishment,\nDeviating from the path\nTo seek nourishment from the hill.\nContinuing to do this brings misfortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Turning away from nourishment.\nPerseverance brings misfortune.\nDo not act thus for ten years.\nNothing serves to further.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Turning to the summit\nFor provision of nourishment\nBrings good fortune.\nSpying about with sharp eyes\nLike a tiger with insatiable craving.\nNo blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Turning away from the path.\nTo remain persevering brings good fortune.\nOne should not cross the great water.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The source of nourishment.\nAwareness of danger brings good fortune.\nIt furthers one to cross the great water.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "28",
      "name": "Ta Kuo / Preponderance of the Great",
      "character": "䷛",
      "trigrams": [
        5,
        2
      ],
      "judgement": "PREPONDERANCE OF THE GREAT.\nThe ridgepole sags to the breaking point.\nIt furthers one to have somewhere to go.\nSuccess.\n",
      "image": "The lake rises above the trees:\nThe image of PREPONDERANCE OF THE GREAT.\nThus the superior man, when he stands alone,\nIs unconcerned,\nAnd if he has to renounce the world,\nHe is undaunted.\n",
      "lines": [
        {
          "description": "To spread white rushes underneath.\nNo blame.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "A dry poplar sprouts at the root.\nAn older man takes a young wife.\nEverything furthers.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "The ridgepole sags to the breaking point.\nMisfortune.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The ridgepole is braced. Good fortune.\nIf there are ulterior motives, it is humiliating.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "A withered poplar puts forth flowers.\nAn older woman takes a husband. \nNo blame. No praise.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "One must go through the water.\nIt goes over one's head.\nMisfortune. No blame.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "29",
      "name": "K'an / The Abysmal (Water)",
      "character": "䷜",
      "trigrams": [
        6,
        6
      ],
      "judgement": "The Abysmal repeated.\nIf you are sincere, you have success in your heart,\nAnd whatever you do succeeds.\n",
      "image": "Water flows on uninterruptedly and reaches its foal:\nThe image of the Abysmal repeated.\nThus the superior man walks in lasting virtue\nAnd carries on the business of teaching.\n",
      "lines": [
        {
          "description": "Repetition of the Abysmal.\nIn the abyss one falls into a pit.\nMisfortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "The abyss is dangerous.\nOne should strive to attain small things only.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Forward and backward, abyss on abyss.\nIn danger like this, pause at first and wait,\nOtherwise you will fall into a pit in the abyss.\nDo not act this way.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "A jug of wine, a bowl of rice with it;\nEarthen vessels\nSimply handed in through the Window.\nThere is certainly no blame in this.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "The abyss is not filled to overflowing,\nIt is filled only to the rim.\nNo blame.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Bound with cords and ropes,\nShut in between thorn-hedged prison walls:\nFor three years one does not find the way.\nMisfortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "30",
      "name": "Li / The Clinging, Fire",
      "character": "䷝",
      "trigrams": [
        3,
        3
      ],
      "judgement": "THE CLINGING. Perseverance furthers.\nIt brings success.\nCare of the cow brings good fortune.\n",
      "image": "That which is bright rises twice:\nThe image of FIRE.\nThus the great man, by perpetuating this brightness,\nIllumines the four quarters of the world.\n",
      "lines": [
        {
          "description": "The footprints run crisscross.\nIf one is seriously intent, no blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Yellow light. Supreme good fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "In the light of the setting sun,\nMen either beat the pot and sing\nOr loudly bewail the approach of old age.\nMisfortune.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Its coming is sudden;\nIt flames up, dies down, is thrown away.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Tears in floods, sighing and lamenting.\nGood fortune. \n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The king used him to march forth and chastise.\nThen it is best to kill the leaders\nAnd take captive the followers. No blame.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "31",
      "name": "Hsien / Influence (Wooing)",
      "character": "䷞",
      "trigrams": [
        7,
        2
      ],
      "judgement": "Influence. Success.\nPerseverance furthers.\nTo take a maiden to wife brings good fortune.\n",
      "image": "A lake on the mountain:\nThe image of influence.\nThus the superior man encourages people to approach him\nBy his readiness to receive them.\n",
      "lines": [
        {
          "description": "The influence shows itself in the big toe.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "The influence shows itself in the calves of the legs.\nMisfortune.\nTarrying brings good fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "The influence shows itself in the thighs.\nHolds to that which follows it.\nTo continue is humiliating.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Perseverance brings good fortune.\nRemorse disappears.\nIf a man is agitated in mind,\nAnd his thoughts go hither and thither,\nOnly those friends \nOn whom he fixes his conscious thoughts\nWill follow.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "The influence shows itself in the back of the neck.\nNo remorse.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "The influence shows itself in the jaws, cheeks, and tongue.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "32",
      "name": "Hêng / Duration",
      "character": "䷟",
      "trigrams": [
        5,
        4
      ],
      "judgement": "DURATION. Success. No blame.\nPerseverance furthers.\nIt furthers one to have somewhere to go.\n",
      "image": "Thunder and wind: the image of DURATION.\nThus the superior man stands firm \nAnd does not change has direction.\n",
      "lines": [
        {
          "description": "Seeking duration too hastily brings misfortune persistently.\nNothing that would further.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Remorse disappears.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "He who does not give duration to his character\nMeets with disgrace.\nPersistent humiliation.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "No game in the field.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Giving duration to one's character through perseverance.\nThis is good fortune for a woman, misfortune for a man.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Restlessness as an enduring condition brings misfortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "33",
      "name": "TUN / Retreat",
      "character": "䷠",
      "trigrams": [
        7,
        1
      ],
      "judgement": "RETREAT. Success.\nIn what is small, perseverance furthers.\n",
      "image": "Mountain under heaven: the image of RETREAT.\nThus the superior man keeps the inferior man at a distance,\nNot angrily but with reserve.\n",
      "lines": [
        {
          "description": "At the tail in retreat. This is dangerous.\nOne must not wish to undertake anything.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "he holds him fast with yellow oxhide.\nNo one can tear him loose.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "A halted retreat \nIs nerve-wracking and dangerous.\nTo retain people as men- and maidservants\nBrings good fortune.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Voluntary retreat brings good fortune to the superior man\nAnd downfall to the inferior man.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Friendly retreat. Perseverance brings good fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Cheerful retreat. Everything serves to further.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "34",
      "name": "Ta Chuang / The Power of the Great ",
      "character": "䷡",
      "trigrams": [
        1,
        4
      ],
      "judgement": "THE POWER OF THE GREAT. Perseverance furthers.\n",
      "image": "Thunder in heaven above:\nThe image of THE POWER OF THE GREAT.\nThus the superior man does not tread upon paths\nThat do not accord with established order.\n",
      "lines": [
        {
          "description": "Power in the toes.\nContinuing brings misfortune.\nThis is certainly true.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Perseverance brings good fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "The inferior man works through power.\nThe superior man does not act thus.\nTo continue is dangerous.\nA goat butts against a hedge\nAnd gets its horns entangled.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Perseverance brings good fortune.\nRemorse disappears.\nThe hedge opens; there is no entanglement.\nPower depends upon the axle of a big cart.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Loses the goat with ease.\nNo remorse.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "A goat butts against a hedge.\nIt cannot go backward, it cannot go forward.\nNothing serves to further.\nIf one notes the difficulty, this brings good fortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "35",
      "name": "Chin / Progress",
      "character": "䷢",
      "trigrams": [
        8,
        3
      ],
      "judgement": "PROGRESS. The powerful prince\nIs honored with horses in large numbers.\nIn a single day he is granted audience three times.\n",
      "image": "The sun rises over the earth:\nThe image of PROGRESS.\nThus the superior man himself\nBrightens his bright virtue.\n",
      "lines": [
        {
          "description": "Progressing, but turned back.\nPerseverance brings good fortune.\nIf one meets with no confidence, one should remain calm.\nNo mistake.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Progressing, but in sorrow.\nPerseverance brings good fortune.\nThen one obtains great happiness from one's ancestress.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "All are in accord. Remorse disappears.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Progress like a hamster.\nPerseverance brings danger.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Remorse disappears.\nTake not gain and loss to heart.\nUndertakings bring good fortune.\nEverything serves to further.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Making progress with the horns is permissible\nOnly for the purpose of punishing one's own city.\nTo be conscious of danger brings good fortune.\nNo blame. \nPerseverance brings humiliation.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "36",
      "name": "Ming I / Darkening of the light",
      "character": "䷣",
      "trigrams": [
        3,
        8
      ],
      "judgement": "DARKENING OF THE LIGHT. In adversity\nIt furthers one to be persevering.\n",
      "image": "The light has sunk into the earth:\nThe image of DARKENING OF THE LIGHT.\nThus does the superior man live with the great mass:\nHe veils his light, yet still shines.\n",
      "lines": [
        {
          "description": "Darkening of the light during flight.\nHe lowers his wings.\nThe superior man does not eat for three days\nOn his wanderings.\nBut he has somewhere to go.\nThe host has occasion to gossip about him.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Darkening of the light injures him in the left thigh.\nHe gives aid with the strength of a horse.\nGood fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Darkening of the light during the hunt in the south.\nTheir great leader is captured.\nOne must not expect perseverance too soon.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "He penetrates the left side of the belly.\nOne gets at the very heart of the darkening of the light.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Darkening of the light as with Prince Chi.\nPerseverance furthers.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Not light but darkness.\nFirst he climbed up to heaven,\nThen plunged into the depths of the earth.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "37",
      "name": "Chia Jên / The Family [The Clan]",
      "character": "䷤",
      "trigrams": [
        3,
        5
      ],
      "judgement": "THE FAMILY. The perseverance of the woman furthers.\n",
      "image": "Wind comes forth from fire:\nThe image of THE FAMILY.\nAnd duration in his way of life.\n",
      "lines": [
        {
          "description": "Firm seclusion within the family.\nRemorse disappears.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "She should not follow her whims.\nShe must attend within to the food.\nPerseverance brings good fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "When tempers flare up in the family,\nToo great severity brings remorse.\nGood fortune nonetheless.\nWhen woman and chile dally and laugh\nIt leads in the end to humiliation.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "She is the treasure of the house.\nGreat good fortune.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "As a king he approaches his family.\nFear not.\nGood fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "His work commands respect.'\nIn the end good fortune comes.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "38",
      "name": "K'uei / Opposition",
      "character": "䷥",
      "trigrams": [
        2,
        3
      ],
      "judgement": "OPPOSITION. In small matters, good fortune.\n",
      "image": "Above, fire; below. The lake.\nThe image of OPPOSITION.\nThus amid all fellowship \nThe superior man retains his individuality.\n",
      "lines": [
        {
          "description": "Remorse disappears.\nIf you lose your horse, do not run after it;\nIt will come back of its own accord.\nWhen you see evil people,\nGuard yourself against mistakes.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "One meets his lord in a narrow street.\nNo blame.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "One sees the wagon dragged back,\nThe oxen halted,\nA man's hair and nose cut off.\nNot a good beginning, but a good end.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Isolated through opposition,\nOne meets a like-minded man\nWith whom one can associate in good faith.\nDespite the danger, no blame.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Remorse disappears.\nThe companion bits his way through the wrappings.\nIf one goes to him,\nHow could it be a mistake?\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Isolated through opposition,\nOne sees one's companion as a pig covered with dirt,\nAs a wagon full of devils.\nFirst one draws a bow against him,\nthen one lays the bow aside.\nHe is not a robber; he will woo at the right time.\nAs one goes, rain falls; then good fortune comes.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "39",
      "name": "Chien / Obstruction",
      "character": "䷦",
      "trigrams": [
        7,
        6
      ],
      "judgement": "OBSTRUCTION. The southwest furthers.\nThe northeast does not further.\nIt furthers one to see the great man.\nPerseverance brings good fortune.\n",
      "image": "Water on the mountain:\nThe image of OBSTRUCTION.\nThus the superior man turns his attention to himself\nAnd molds his character.\n",
      "lines": [
        {
          "description": "Going leads to obstructions,\nComing meets with praise.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "The King's servant is beset by obstruction upon obstruction,\nBut it is not his own fault.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Going leads to obstructions;\nHence he comes back.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Going leads to obstructions,\nComing leads to union.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "In the midst of the greatest obstructions,\nFriends come.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Going leads to obstructions,\nComing leads to great good fortune.\nIt furthers one to see the great man.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "40",
      "name": "Hsieh / Deliverance",
      "character": "䷧",
      "trigrams": [
        6,
        4
      ],
      "judgement": "DELIVERANCE. The southwest furthers.\nIf there is no longer anything where one has to go,\nReturn brings good fortune.\nIf there is still something where one has to go,\nHastening brings good fortune.\n",
      "image": "Thunder and rain set in:\nThe image of DELIVERANCE.\nThus the superior man pardons mistakes \nAnd forgives misdeeds.\n",
      "lines": [
        {
          "description": "Without blame.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "One kills three foxes in the field\nAnd receives a yellow arrow.\nPerseverance brings good fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "If a man carries a burden on his back\nAnd nonetheless rides in a carriage,\nHe thereby encourages robbers to draw near.\nPerseverance leads to humiliation.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Deliver yourself from your great toe.\nThen the companion comes,\nAnd him you can trust.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "If only the superior man can deliver himself,\nIt brings good fortune.\nThus he proves to inferior men that he is in earnest.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The prince shoots at a hawk on a high wall.\nHe kills it. Everything serves to further.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "41",
      "name": "Sun / Decrease",
      "character": "䷨",
      "trigrams": [
        2,
        7
      ],
      "judgement": "DECREASE combined with sincerity\nBrings about supreme good fortune\nWithout blame.\nOne may be persevering in this.\nIt furthers one to undertake something.\nHow is this to be carried out?\nOne may use two small bowls for the sacrifice.\n",
      "image": "At the foot of the mountain, the lake:\nThe image of DECREASE.\nThus the superior man controls his anger\nAnd restrains his instincts.\n",
      "lines": [
        {
          "description": "Going quickly when one's tasks are finished\nIs without blame.\nBut one must reflect on how much one may decrease others.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Perseverance furthers.\nTo undertake something brings misfortune.\nWithout decreasing oneself,\nOne is able to bring increase to others.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "When three people journey together,\nTheir number increases by one.\nWhen one man journeys alone,\nHe finds a companion.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "If a man deceases his faults,\nIt makes the other hasten to come and rejoice.\nNo blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Someone does indeed increase him.\nTen pairs of tortoises cannot oppose it.\nSupreme good fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "If one is increased without depriving other,\nThere is no blame.\nPerseverance brings good fortune.\nIt furthers one to undertake something.\nOne obtains servants\nBut no longer has a separate home.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "42",
      "name": "I / Increase",
      "character": "䷩",
      "trigrams": [
        4,
        5
      ],
      "judgement": "INCREASE. It furthers one\nTo undertake something.\nIt furthers one to cross the great water.\n",
      "image": "Wind and thunder: the image of INCREASE.\nThus the superior man:\nIf he sees good, he imitates it;\nIf he has faults, he rids himself of them.\n",
      "lines": [
        {
          "description": "It furthers one to accomplish great deeds.\nSupreme good fortune. No blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Someone does indeed increase him; \nTen pairs of tortoises cannot oppose it.\nConstant perseverance brings good fortune.\nThe king presents him before God.\nGood fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "One is enriched through unfortunate events.\nNo blame, if you are sincere\nAnd walk in the middle,\nAnd report with a seal to the prince.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "If you walk in the middle \nAnd report the prince,\nHe will follow.\nIt furthers one to be used\nIn the removal of the capital.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "If in truth you have a kind heart, ask not.\nSupreme good fortune.\nTruly, kindness will be recognized as your virtue. \n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He brings increase to no one.\nIndeed, someone even strikes him.\nHe does not keep his heart constantly steady.\nMisfortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "43",
      "name": "Kuai / Break-through (Resoluteness)",
      "character": "䷪",
      "trigrams": [
        1,
        2
      ],
      "judgement": "BREAK-THROUGH. One must resolutely make the matter known\nAt the court of the king.\nIt must be announced truthfully. Danger.\nIt is necessary to notify one's own city.\nIt does not further to resort to arms.\nIt furthers one to undertake something.\n",
      "image": "The lake has risen up to heaven:\nThe image of BREAK-THROUGH.\nThus the superior man\nDispenses riches downward\nAnd refrains from resting on his virtue.\n",
      "lines": [
        {
          "description": "Mighty in the forward-striding toes.\nWhen one goes and is not equal to the task,\nOne makes a mistake.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "A cry of alarm. Arms at evening and at night.\nFear nothing.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "To be powerful in the cheekbones \nBrings misfortune.\nThe superior man is firmly resolved.\nHe walks alone and is caught in the rain.\nHe is bespattered,\nAnd people murmur against him.\nNo blame.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "There is no skin on his thighs,\nAnd walking comes hard.\nIf a man were to let himself be led like a sheep,\nRemorse would disappear.\nBut if these words are heard\nThey will not be believed.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "In dealing with weeds,\nFirm resolution is necessary.\nWalking in the middle\nRemains free of blame.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "No cry.\nIn the end misfortune comes.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "44",
      "name": "Kou / Coming to Meet",
      "character": "䷫",
      "trigrams": [
        5,
        1
      ],
      "judgement": "COMING TO MEET. The maiden is powerful.\nOne should not marry such a maiden.\n",
      "image": "Under heaven, wind:\nThe image of COMING TO MEET.\nThus does the prince act when disseminating his commands\nAnd proclaiming them to the four quarters of heaven.\n",
      "lines": [
        {
          "description": "It must be checked with a brake of bronze.\nPerseverance brings good fortune.\nIf one lets it take its course, one experiences misfortune.\nEven a lean pig has it in him to rage around.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "There is a fish in the tank. No blame.\nDoes not further guests.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "And walking comes hard.\nIf one is mindful of the danger,\nNo great mistake is made.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "No fish in the tank.\nThis leads to misfortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "A melon covered with willow leaves.\nHidden lines.\nThen it drops down to one from heave.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He comes to meet with his horns.\nHumiliation. No blame.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "45",
      "name": "Ts'ui / Gathering Together [Massing]",
      "character": "䷬",
      "trigrams": [
        8,
        2
      ],
      "judgement": "GATHERING TOGETHER. Success.\nThe king approaches his temple.\nIt furthers one to see the great man.\nThis brings success. Perseverance furthers.\nTo bring great offerings creates good fortune.\nIt furthers one to undertake something.\n",
      "image": "Over the earth, the lake:\nThe image of GATHERING TOGETHER.\nThus the superior man renews his weapons\nIn order to meet the unforeseen.\n",
      "lines": [
        {
          "description": "If you are sincere, but not to the end,\nThere will sometimes be confusion, sometimes gathering together.\nIf you call out, \nThen after one grasp of the hand you can laugh again.\nRegret not. Going is without blame.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Letting oneself be drawn\nBrings good fortune and remains blameless.\nIf one is sincere,\nIt furthers one to bring even a small offering.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Gathering together amid sighs.\nNothing that would further.\nGoing is without blame.\nSlight humiliation.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Great good fortune. No blame.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "If in gathering together one has position,\nThis brings no blame.\nIf there are some who are not yet sincerely in the work,\nSublime and enduring perseverance is needed.\nThen remorse disappears.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Lamenting and sighing, floods of tears.\nNo blame.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "46",
      "name": "Shêng / Pushing Upward",
      "character": "䷭",
      "trigrams": [
        5,
        8
      ],
      "judgement": "PUSHING UPWARD has supreme success.\nOne must see the great man.\nFear not.\nDeparture toward the south\nBrings good fortune.\n",
      "image": "Within the earth, wood grows:\nThe image of PUSHING UPWARD.\nThus the superior man of devoted character\nHeaps up small things\nIn order to achieve something high and great.\n",
      "lines": [
        {
          "description": "Pushing upward that meets with confidence\nBrings great good fortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "If one is sincere,\nIt furthers one to bring even a small offering.\nNo blame.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "One pushes upward into an empty city.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The king offers him Mount Ch'i.\nGood fortune. No blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Perseverance brings good fortune.\nOne pushes upward by steps.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Pushing upward in darkness.\nIt furthers one\nTo be unremittingly persevering.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "47",
      "name": "K'un / Oppression (Exhaustion)",
      "character": "䷮",
      "trigrams": [
        6,
        2
      ],
      "judgement": "OPPRESSION. Success. Perseverance.\nThe great man brings about good fortune.\nNo blame.\nWhen one has something to say,\nIt is not believed.\n",
      "image": "There is not water in the lake:\nThe image of EXHAUSTION.\nThus the superior man stakes his life\nOn following his will.\n",
      "lines": [
        {
          "description": "One sits oppressed under a bare tree\nAnd strays into a gloomy valley.\nFor three years one sees nothing.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "One is oppressed while at meat and drink.\nThe man with the scarlet knee bands is just coming.\nIt furthers one to offer sacrifice.\nTo set forth brings misfortune.\nNo blame.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "A man permits himself to be oppressed by stone,\nAnd leans on thorns and thistles.\nHe enters the house and does not see his wife.\nMisfortune.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "He comes very quietly, oppressed in a golden carriage.\nHumiliation, but the end is reached.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "His nose and feet are cut off.\nOppression at the hands of the man with the purple knee bands.\nJoy comes softly.\nIt furthers one to make offerings and libations.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He is oppressed by creeping vines.\nHe moves uncertainly and says, \"Movement brings remorse.\"\nIf one feels remorse over this and makes a start,\nGood fortune comes.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "48",
      "name": "Ching / The Well",
      "character": "䷯",
      "trigrams": [
        5,
        6
      ],
      "judgement": "THE WELL. The town may be changed,\nBut the well cannot be changed.\nIt neither decreases nor increases.\nThey come and go and draw from the well.\nIf one gets down almost to the water\nAnd the rope does not go all the way,\nOr the jug breaks, it brings misfortune.\n",
      "image": "Water over wood: the image of THE WELL.\nThus the superior man encourages the people at their work,\nAnd exhorts them to help one another.\n",
      "lines": [
        {
          "description": "One does not drink the mud of the well.\nNo animals come to an old well.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "At the well hole one shoots fishes.\nThe jug is broken and leaks.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "The well is cleaned, but no one drinks from it.\nThis is my heart's sorrow,\nFor one might draw from it.\nIf the king were clear-minded,\nGood fortune might be enjoyed in common.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The well is being lined. No blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "In the well there is a clear, cold spring\nFrom which one can drink.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "One draws from the well\nWithout hindrance.\nIt is dependable.\nSupreme good fortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "49",
      "name": "Ko / Revolution (Molting)",
      "character": "䷰",
      "trigrams": [
        3,
        2
      ],
      "judgement": "REVOLUTION. On your own day\nYou are believed.\nSupreme success,\nFurthering through perseverance.\nRemorse disappears.\n",
      "image": "Fire in the lake: the image of REVOLUTION.\nThus the superior man\nSets the calendar in order\nAnd makes the seasons clear.\n",
      "lines": [
        {
          "description": "Wrapped in the hide of a yellow cow.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "When one's own day comes, one may create revolution.\nStarting brings good fortune. No blame.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Starting brings misfortune.\nPerseverance brings danger.\nWhen talk of revolution has gone the rounds three times,\nOne may commit himself,\nAnd men will believe him.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Remorse disappears. Men believe him.\nChanging the form of government brings good fortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "The great man changes like a tiger.\nEven before he questions the oracle\nHe is believed.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "The superior man changes like a panther.\nThe inferior man molts in the face.\nStarting brings misfortune.\nTo remain persevering brings good fortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "50",
      "name": "Ting / The Caldron",
      "character": "䷱",
      "trigrams": [
        5,
        3
      ],
      "judgement": "THE CALDRON. Supreme good fortune.\nSuccess.\n",
      "image": "Fire over wood:\nThe image of THE CALDRON.\nThus the superior man consolidates his fate \nBy making his position correct.\n",
      "lines": [
        {
          "description": "A ting with legs upturned.\nFurthers removal of stagnating stuff.\nOne takes a concubine for the sake of her son.\nNo blame.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "There is food in the ting.\nMy comrades are envious,\nBut they cannot harm me.\nGood fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "The handle of the ting is altered.\nOne is impeded in his way of life.\nThe fat of the pheasant is not eaten.\nOnce rain falls, remorse is spent.\nGood fortune comes in the end.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The legs of the ting are broken.\nThe prince's meal is spilled\nAnd his person is soiled.\nMisfortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "The ting has yellow handles, golden carrying rings.\nPerseverance furthers.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The ting has rings of jade.\nGreat good fortune.\nNothing that would not act to further.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "51",
      "name": "Chên / The Arousing (Shock, Thunder)",
      "character": "䷲",
      "trigrams": [
        4,
        4
      ],
      "judgement": "SHOCK brings success.\nShock comes-oh, oh!\nLaughing words -ha, ha!\nThe shock terrifies for a hundred miles,\nAnd he does not let fall the sacrificial spoon and chalice.\n",
      "image": "Thunder repeated: the image of SHOCK.\nThus in fear and trembling\nThe superior man sets his life in order\nAnd examines himself.\n",
      "lines": [
        {
          "description": "Shock comes-oh, oh!\nThen follow laughing words-ha, ha!\nGood fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Shock comes bringing danger.\nA hundred thousand times\nYou lose your treasures\nAnd must climb the nine hills.\nDo not go in pursuit of them.\nAfter seven days you will get them back again.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Shock comes and makes one distraught.\nIf shock spurs to action\nOne remains free of misfortune.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Shock is mired.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Shock goes hither and thither.\nDanger.\nHowever, nothing at all is lost.\nYet there are things to be done.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Shock brings ruin and terrified gazing around.\nGoing ahead brings misfortune.\nIf it has not yet touched one's own body\nBut has reached one's neighbor first,\nThere is no blame.\nOne's comrades have something to talk about.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "52",
      "name": "Kên / Keeping Still, Mountain",
      "character": "䷳",
      "trigrams": [
        7,
        7
      ],
      "judgement": "KEEPING STILL. Keeping his back still\nSo that he no longer feels his body.\nHe goes into his courtyard\nAnd does not see his people.\nNo blame.\n",
      "image": "Mountains standing close together:\nThe image of KEEPING STILL.\nThus the superior man\nDoes not permit his thoughts \nTo go beyond his situation.\n",
      "lines": [
        {
          "description": "Keeping his toes still.\nNo blame.\nContinued perseverance furthers.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Keeping his calves still.\nHe cannot rescue him whom he follows.\nHis heart is not glad.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "Keeping his hips still.\nMaking his sacrum stiff.\nDangerous. The heart suffocates.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Keeping his trunk still.\nNo blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Keeping his jaws still.\nThe words have order.\nRemorse disappears.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "Noblehearted keeping still.\nGood fortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "53",
      "name": "Chien / Development (Gradual Progress)",
      "character": "䷴",
      "trigrams": [
        7,
        5
      ],
      "judgement": "DEVELOPMENT. The maiden\nIs given in marriage.\nGood fortune.\nPerseverance furthers.\n",
      "image": "On the mountain, a tree:\nThe image of DEVELOPMENT.\nThus the superior man abides in dignity and virtue,\nIn order to improve the mores.\n",
      "lines": [
        {
          "description": "The wild goose gradually draws near the shore. \nThe young son is in danger.\nThere is talk. No blame.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "The wild goose gradually draws near the cliff.\nEating and drinking in peace and concord.\nGood fortune.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "The wild goose gradually draws near the plateau.\nThe man goes forth and does not return.\nThe woman carries a child but does not bring it forth.\nMisfortune. \nIt furthers one to fight off robbers.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The wild goose goes gradually draws near the tree.\nPerhaps it will find a flat branch. No blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "The wild goose gradually draws near the summit.\nFor three years the woman has no child.\nIn the end nothing can hinder her.\nGood fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "The wild goose gradually draws near the clouds heights.\nIts feathers can be used for the sacred dance.\nGood fortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "54",
      "name": "Kuei Mei / The Marrying Maiden",
      "character": "䷵",
      "trigrams": [
        2,
        4
      ],
      "judgement": "THE MARRYING MAIDEN.\nUndertakings bring misfortune.\nNothing that would further.\n",
      "image": "Thunder over the lake:\nThe image of THE MARRYING MAIDEN.\nThus the superior man\nUnderstands the transitory\nIn the light of the eternity of the end.\n",
      "lines": [
        {
          "description": "The marrying maiden as a concubine.\nA lame man who is able to tread.\nUndertakings bring good fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "A one-eyed man who is able to see.\nThe perseverance of a solitary man furthers.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "The marrying maiden as a slave.\nShe marries as a concubine.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "The marrying maiden draws out the allotted time.\nA late marriage comes in due course.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "The sovereign I gave his daughter in marriage.\nThe embroidered garments of the princess\nWere not as gorgeous\nAs those of the serving maid.\nThe moon that is nearly full\nBrings good fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The woman holds the basket, but there are no fruits in it.\nThe man stabs the sheep, but no blood flows.\nNothing that acts to further.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "55",
      "name": "Fêng / Abundance [Fullness]",
      "character": "䷶",
      "trigrams": [
        3,
        4
      ],
      "judgement": "ABUNDANCE has success.\nThe king attains abundance.\nBe not sad.\nBe like the sun at midday.\n",
      "image": "Both thunder and lightning come:\nThe image of ABUNDANCE.\nThus the superior man decides lawsuits\nAnd carries out punishments.\n",
      "lines": [
        {
          "description": "When a man meets his destined ruler,\nThey can be together ten days,\nAnd it is not a mistake.\nGoing meets with recognition.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "The curtain is of such fullness\nThat the polestars can be seen at noon.\nThrough going one meets with mistrust and hate.\nIf one rouses him through truth,\nGood fortune comes.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "The underbrush is of such abundance\nThat the small stars can be seen at noon.\nHe breaks his right arm . No blame.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The curtain is of such fullness\nThat the polestars can be seen at noon.\nHe meets his ruler, who is of like kind.\nGood fortune.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Lines are coming,\nBlessing and fame draw near.\nGood fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "His house is in a state of abundance.\nHe screens off his family.\nHe peers through the gate\nAnd no longer perceives anyone.\nFor three years he sees nothing.\nMisfortune.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "56",
      "name": "Lü / The Wanderer",
      "character": "䷷",
      "trigrams": [
        7,
        3
      ],
      "judgement": "The Wanderer. Success through smallness.\nPerseverance brings good fortune\nTo the Wanderer.\n",
      "image": "Fire on the mountain:\nThe image of THE WANDERER.\nThus the superior man\nIs clear-minded and cautious\nIn imposing penalties,\nAnd protracts no lawsuits.\n",
      "lines": [
        {
          "description": "If the wanderer busies himself with trivial things, \nHe draws down misfortune upon himself.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "The wanderer comes to an inn.\nHe has his property with him.\nHe wins the steadfastness of a young servant.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "The wanderer's inn burns down.\nHe loses the steadfastness of his young servant.\nDanger.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The wanderer rests in a shelter.\nHe obtains his property and an ax.\nMy heart is not glad.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "He shoots a pheasant.\nIt drops with the first arrow.\nIn the end this brings both praise and office.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "The bird's nest burns up.\nThe wanderer laughs at first,\nThen must needs lament and weep.\nThrough carelessness he loses his cow.\nMisfortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "57",
      "name": "Sun / The Gentle (The Penetrating, Wind)",
      "character": "䷸",
      "trigrams": [
        5,
        5
      ],
      "judgement": "THE GENTLE. Success through what is small.\nIt furthers one to have somewhere to go.\nIt furthers one to see the great man.\n",
      "image": "Winds following one upon the other:\nThe image of THE GENTLY PENETRATING.\nThus the superior man \nSpreads his commands abroad\nAnd carries out his undertakings.\n",
      "lines": [
        {
          "description": "In advancing and in retreating,\nThe perseverance of a warrior furthers.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "Penetration under the bed.\nPriests and magicians are used in great number.\nGood fortune. No blame.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Repeated penetration. Humiliation.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "Remorse vanishes.\nDuring the hunt\nThree kinds of game are caught.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Perseverance brings good fortune.\nRemorse vanishes.\nNothing that does not further.\nNo beginning, but an end.\nBefore the change, three days.\nAfter the change, three days.\nGood fortune.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Penetration under the bed.\nHe loses his property and his ax.\nPerseverance brings misfortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "58",
      "name": "Tui / The Joyous, Lake",
      "character": "䷹",
      "trigrams": [
        2,
        2
      ],
      "judgement": "THE JOYOUS. Success.\nPerseverance is favorable.\n",
      "image": "Lakes resting one on the other:\nThe image of THE JOYOUS.\nThus the superior man joins with his friends\nFor discussion and practice.\n",
      "lines": [
        {
          "description": "Contented joyousness. Good fortune.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Sincere joyousness. Good fortune.\nRemorse disappears.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Coming joyousness. Misfortune.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Joyousness that is weighed is not at peace.\nAfter ridding himself of mistakes a man has joy.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Sincerity toward disintegrating influences is dangerous.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Seductive joyousness.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "59",
      "name": "Huan / Dispersion [Dissolution]",
      "character": "䷺",
      "trigrams": [
        6,
        5
      ],
      "judgement": "DISPERSION. Success.\nThe king approaches his temple.\nIt furthers one to cross the great water.\nPerseverance furthers.\n",
      "image": "The wind drives over the water:\nThe image of DISPERSION.\nThus the kings of old sacrificed to the Lord\nAnd built temples.\n",
      "lines": [
        {
          "description": "He brings help with the strength of a horse.\nGood fortune.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "At the dissolution\nHe hurries to that which supports him.\nRemorse disappears.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "He dissolves his self. No remorse.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "He dissolves his bond with his group.\nSupreme good fortune.\nDispersion leads in turn to accumulation.\nThis is something that ordinary men do not think of.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "His loud cries are as dissolving as sweat.\nDissolution! A king abides without blame.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He dissolves his blood.\nDeparting, keeping at a distance, going out,\nIs without blame.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "60",
      "name": "Chieh / Limitation",
      "character": "䷻",
      "trigrams": [
        2,
        6
      ],
      "judgement": "LIMITATION. Success.\nGalling limitation must not be persevered in.\n",
      "image": "Water over lake: the image of LIMITATION.\nThus the superior man\nCreates number and measure,\nAnd examines the nature of virtue and correct conduct.\n",
      "lines": [
        {
          "description": "Not going out of the door and the courtyard\nIs without blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "Not going out of the gate and the courtyard\nBrings misfortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "He who knows limitation\nWill have cause to lament.\nNo blame.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Contented limitation. Success.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "Sweet limitation brings good fortune.\nGoing brings esteem.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Galling limitation.\nPerseverance brings misfortune.\nRemorse disappears.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "61",
      "name": "Chung Fu / Inner Truth ",
      "character": "䷼",
      "trigrams": [
        2,
        5
      ],
      "judgement": "INNER TRUTH. Pigs and fishes.\nGood fortune.\nIt furthers one to cross the great water.\nPerseverance furthers.\n",
      "image": "Wind over lake: the image of INNER TRUTH.\nThus the superior man discusses criminal cases \nIn order to delay executions.\n",
      "lines": [
        {
          "description": "Being prepared brings good fortune.\nIf there are secret designs, it is disquieting.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "A crane calling in the shade.\nIts young answers it.\nI have a good goblet.\nI will share it with you.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "He finds a comrade.\nNow he beats the drum, now he stops.\nNow he sobs, now he sings.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "The moon nearly at the full.\nThe team horse goes astray.\nNo blame.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "He possesses truth, which links together.\nNo blame.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "Cockcrow penetrating to heaven.\nPerseverance brings misfortune.\n",
          "type": "yang",
          "position": 5
        }
      ]
    },
    {
      "id": "62",
      "name": "Hsiao Kuo / Preponderance of the Small",
      "character": "䷽",
      "trigrams": [
        7,
        4
      ],
      "judgement": "PREPONDERANCE OF THE SMALL. Success.\nPerseverance furthers.\nSmall things may be done; great things should not be done.\nThe flying bird brings the message:\nIt is not well to strive upward,\nIt is well to remain below.\nGreat good fortune.\n",
      "image": "Thunder on the mountain:\nThe image of PREPONDERANCE OF THE SMALL.\nThus in his conduct the superior man gives preponderance to reverence.\nIn bereavement he gives preponderance to grief.\nIn his expenditures he gives preponderance to thrift.\n",
      "lines": [
        {
          "description": "The bird meets with misfortune through flying.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "She passes by her ancestor\nAnd meets her ancestress.\nHe does not reach his prince\nAnd meets the official.\nNo blame.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "If one is not extremely careful,\nSomebody may come up from behind and strike him.\nMisfortune.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "No blame. He meets him without passing by.\nGoing brings danger. One must be on guard.\nDo not act. Be constantly persevering.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Dense clouds,\nNo rain from our western territory.\nThe prince shoots and hits him who is in the cave.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "He passes him by, not meeting him.\nThe flying bird leaves him.\nMisfortune.\nThis means bad luck and injury.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "63",
      "name": "Chi Chi / After Completion",
      "character": "䷾",
      "trigrams": [
        3,
        6
      ],
      "judgement": "AFTER COMPLETION. Success in small matters.\nPerseverance furthers.\nAt the beginning good fortune.\nAt the end disorder.\n",
      "image": "Water over fire: the image of the condition \nIn AFTER COMPLETION.\nThus the superior man \nTakes thought of misfortune\nAnd arms himself against it in advance.\n",
      "lines": [
        {
          "description": "He breaks his wheels.\nHe gets his tail in the water.\nNo blame.\n",
          "type": "yang",
          "position": 0
        },
        {
          "description": "The woman loses the curtain of her carriage.\nDo not run after it;\nOn the seventh day you will get it.\n",
          "type": "yin",
          "position": 1
        },
        {
          "description": "The Illustrious Ancestor\nDisciplines the Devil's Country.\nAfter three years he conquers it.\nInferior people must not be employed.\n",
          "type": "yang",
          "position": 2
        },
        {
          "description": "The finest clothes turn to rags.\nBe careful all day long.\n",
          "type": "yin",
          "position": 3
        },
        {
          "description": "The neighbor in the east who slaughters an ox\nDoes not attain as much real happiness\nAs the neighbor in the west\nWith his small offering.\n",
          "type": "yang",
          "position": 4
        },
        {
          "description": "He gets his head in the water. Danger.\n",
          "type": "yin",
          "position": 5
        }
      ]
    },
    {
      "id": "64",
      "name": "Wei Chi / Before Completion",
      "character": "䷿",
      "trigrams": [
        6,
        3
      ],
      "judgement": "BEFORE COMPLETION. Success.\nBut if the little fox, after nearly completing the crossing,\nGets his tail in the water,\nThere is nothing that would further.\n",
      "image": "Fire over water:\nThe image of the condition before transition.\nThus the superior man is careful\nIn the differentiation of things,\nSo that each finds its place.\n",
      "lines": [
        {
          "description": "He gets his tail in the water.\nHumiliating.\n",
          "type": "yin",
          "position": 0
        },
        {
          "description": "He brakes his wheels.\nPerseverance brings good fortune.\n",
          "type": "yang",
          "position": 1
        },
        {
          "description": "Before completion, attack brings misfortune.\nIt furthers one to cross the great water.\n",
          "type": "yin",
          "position": 2
        },
        {
          "description": "Perseverance brings good fortune.\nRemorse disappears.\nShock, thus to discipline the Devil's Country.\nFor three years, great realms are rewarded.\n",
          "type": "yang",
          "position": 3
        },
        {
          "description": "Perseverance brings good fortune.\nNo remorse.\nThe light of the superior man is true.\nGood fortune.\n",
          "type": "yin",
          "position": 4
        },
        {
          "description": "There is drinking of wine\nIn genuine confidence. No blame.\nBut if one wets his head,\nHe loses it, in truth.\n",
          "type": "yang",
          "position": 5
        }
      ]
    }
  ],

  trigrams: [
    {
      "id": "1",
      "animal": {
        "chinese": "馬",
        "latin": "horse"
      },
      "stage": "creative",
      "attribute": "strong",
      "figure": "☰",
      "binary": "111",
      "name": {
        "chinese": "乾",
        "latin": "qián"
      },
      "translation": {
        "wilhelm": "the Creative, Force"
      },
      "image": {
        "chinese": "天",
        "latin": "heaven, sky"
      },
      "direction": "northwest",
      "family relationship": "father",
      "body part": "head"
    },
    {
      "id": "2",
      "animal": {
        "chinese": "羊",
        "latin": "sheep, goat"
      },
      "stage": "tranquil (complete devotion)",
      "attribute": "pleasure",
      "figure": "☱",
      "binary": "110",
      "name": {
        "chinese": "兌",
        "latin": "duì"
      },
      "translation": {
        "wilhelm": "the Joyous, Open"
      },
      "image": {
        "chinese": "澤",
        "latin": "lake"
      },
      "direction": "west",
      "family relationship": "third daughter",
      "body part": "mouth"
    },
    {
      "id": "3",
      "animal": {
        "chinese": "雉",
        "latin": "pheasant"
      },
      "stage": "clinging, clarity, adaptable",
      "attribute": "light-giving, dependence",
      "figure": "☲",
      "binary": "101",
      "name": {
        "chinese": "離",
        "latin": "lí"
      },
      "translation": {
        "wilhelm": "the Clinging, Radiance"
      },
      "image": {
        "chinese": "火",
        "latin": "fire"
      },
      "direction": "south",
      "family relationship": "second daughter",
      "body part": "eye"
    },
    {
      "id": "4",
      "animal": {
        "chinese": "龍",
        "latin": "dragon"
      },
      "stage": "initiative",
      "attribute": "inciting movement",
      "figure": "☳",
      "binary": "100",
      "name": {
        "chinese": "震",
        "latin": "zhèn"
      },
      "translation": {
        "wilhelm": "the Arousing, Shake"
      },
      "image": {
        "chinese": "雷",
        "latin": "thunder"
      },
      "direction": "east",
      "family relationship": "first son",
      "body part": "foot"
    },
    {
      "id": "5",
      "animal": {
        "chinese": "雞",
        "latin": "fowl"
      },
      "stage": "gentle entrance",
      "attribute": "penetrating",
      "figure": "☴",
      "binary": "011",
      "name": {
        "chinese": "巽",
        "latin": "xùn"
      },
      "translation": {
        "wilhelm": "the Gentle, Ground"
      },
      "image": {
        "chinese": "風",
        "latin": "wind"
      },
      "direction": "southeast",
      "family relationship": "first daughter",
      "body part": "thigh"
    },
    {
      "id": "6",
      "animal": {
        "chinese": "豕",
        "latin": "pig"
      },
      "stage": "in-motion",
      "attribute": "dangerous",
      "figure": "☵",
      "binary": "010",
      "name": {
        "chinese": "坎",
        "latin": "kǎn"
      },
      "translation": {
        "wilhelm": "the Abysmal, Gorge"
      },
      "image": {
        "chinese": "水",
        "latin": "water"
      },
      "direction": "north",
      "family relationship": "second son",
      "body part": "ear"
    },
    {
      "id": "7",
      "animal": {
        "chinese": "狗",
        "latin": "wolf, dog"
      },
      "stage": "completion",
      "attribute": "resting, stand-still",
      "figure": "☶",
      "binary": "001",
      "name": {
        "chinese": "艮",
        "latin": "gèn"
      },
      "translation": {
        "wilhelm": "Keeping Still, Bound"
      },
      "image": {
        "chinese": "山",
        "latin": "mountain"
      },
      "direction": "northeast",
      "family relationship": "third son",
      "body part": "hand"
    },
    {
      "id": "8",
      "animal": {
        "chinese": "牛",
        "latin": "cow"
      },
      "stage": "receptive",
      "attribute": "devoted, yielding",
      "figure": "☷",
      "binary": "000",
      "name": {
        "chinese": "坤",
        "latin": "kūn"
      },
      "translation": {
        "wilhelm": "the Receptive, Field"
      },
      "image": {
        "chinese": "地",
        "latin": "earth"
      },
      "direction": "southwest",
      "family relationship": "mother",
      "body part": "belly"
    }
  ],
  lookUpReading : function(hex) {   /////// Lookupthe reading from binary info and returns two hexagrams from the iChing Object
    var value=0;
    var changingValue=0;
    var kw, changingHex;
    
    for (var i=0; i<6; i++) {
      if (hex[i][0] === true) { 
        value+=Math.pow(2,5-i);
      }
      // build changing hexagram value    
      if (hex[i][1] === true) {  // if changing line
        if ( hex[i][2] === true ) {
          changingValue+=Math.pow(2,5-i);
        } 
      } // not a changing line, still calculate changing line as original value
      else  {
        if (hex[i][0] ) { 
            changingValue+=Math.pow(2,5-i);
        }
      }
    } // end for loop.

    kw = iChing.kingWen(value);
    changingHex = iChing.kingWen( changingValue );
    
    return( [kw,  changingHex] );
  }
}

//console.log(iChing.lookUpReading);

// merges the hexagramsToo into iChing.hexagrams...... 
$.extend( true, iChing.hexagrams, iChing.hexagramsToo );

for (var i = 0; i < 64; i++) {
  iChing.hexagrams[i].fuHsiBin = iChing.kingWenSeq.indexOf(i+1) ;
}

// receives two boolean values.
var Bigram = function( line, changingLine ) {
    this.line = line;
    this.changingLine = changingLine;
    return [this.line, this.changingLine];   // , this.line != this.changingLine]; // != is same as XOR 
  };

  // note the changing hexagram line is equal to this.line ^ this.changingLine

var  oldYin= Bigram(false, true),
  youngYin = Bigram(false, false),
  oldYang = Bigram(true, false),
  youngYang = Bigram(true, true);

var marbles = function() {
    /*
    1/16 marble  representing old yin 
    7/16 marbles representing young yin 
    3/16 marbles representing old yang 
    5/16 marbles representing young yang 
    */
    var m=Math.floor( Math.random()*16 )+1;
    if ( m === 1 )       { return oldYin; }
    if ( m > 1 &&  m <= 8 )  { return youngYin; }
    if ( m > 8 &&  m <= 12 ) { return oldYang; }
    if ( m > 12 )        { return youngYang; }
};

var coins= function() {
    /*
    HHH 9   1/8   old yang

    HTH 8 \  
    HHT 8   3/8   young yin
    THH 8 /

    HTT 7 \ 
    TTH 7   3/8   young yang
    THT 7 /  

    TTT 6   1/8   old yin
    */
    var i= Math.floor( Math.random()*8 )+1;
    if ( i === 1 )       { return oldYang; }
    if ( i > 1 &&  i <= 4 )  { return youngYin; }
    if ( i > 4 &&  i <= 15 ) { return youngYang; }
    if ( i === 8 )       { return oldYin; }
};

var createLine = function ( preferences ) {
  var line;
  switch( preferences ) {
    case "Marbles" : line = marbles(); break;
    case "Coins" : line = coins(); break;
  }
  return line;
}


var createHex = function( preferences ) {   /////// can cut this shit right down to just storing the god damn hex and that's it ! 
  var hex= [];
  //console.log("Creating your hexagram baby")
  for (var i=0; i<6; i++) {
    // create line based onprobability model
    //console.log(i, preferences , hex)
    switch( preferences ) {
      case "Marbles" :
        hex[i] = marbles();
        //console.log('M');
        break;
      case "Coins" :
        hex[i] = coins();
        break;
    } // end switch
  } // end for loop.
  //console.log(hex);
  return hex;
};

export { createLine, createHex, iChing };