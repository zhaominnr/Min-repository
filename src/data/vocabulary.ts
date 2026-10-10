import type { CategoryId, QuizCategory, Word } from '../types'

export const WORDS: Word[] = [
  // Greetings
  { id: 'g1', category: 'greetings', hanzi: '你好', pinyin: 'nǐ hǎo', english: 'hello', emoji: '👋' },
  { id: 'g2', category: 'greetings', hanzi: '再见', pinyin: 'zài jiàn', english: 'goodbye', emoji: '👋' },
  { id: 'g3', category: 'greetings', hanzi: '谢谢', pinyin: 'xiè xie', english: 'thank you', emoji: '🙏' },
  { id: 'g4', category: 'greetings', hanzi: '不客气', pinyin: 'bú kè qi', english: "you're welcome", emoji: '😊' },
  { id: 'g5', category: 'greetings', hanzi: '对不起', pinyin: 'duì bu qǐ', english: 'sorry', emoji: '🙇' },
  { id: 'g6', category: 'greetings', hanzi: '没关系', pinyin: 'méi guān xi', english: "it's okay", emoji: '👍' },
  { id: 'g7', category: 'greetings', hanzi: '早上好', pinyin: 'zǎo shang hǎo', english: 'good morning', emoji: '🌅' },
  { id: 'g8', category: 'greetings', hanzi: '晚上好', pinyin: 'wǎn shang hǎo', english: 'good evening', emoji: '🌙' },
  { id: 'g9', category: 'greetings', hanzi: '请', pinyin: 'qǐng', english: 'please', emoji: '🤲' },
  { id: 'g10', category: 'greetings', hanzi: '是', pinyin: 'shì', english: 'yes', emoji: '✅' },
  { id: 'g11', category: 'greetings', hanzi: '不是', pinyin: 'bú shì', english: 'no', emoji: '❌' },
  { id: 'g12', category: 'greetings', hanzi: '我爱你', pinyin: 'wǒ ài nǐ', english: 'I love you', emoji: '❤️' },

  // Numbers
  { id: 'n0', category: 'numbers', hanzi: '零', pinyin: 'líng', english: 'zero', emoji: '0️⃣' },
  { id: 'n1', category: 'numbers', hanzi: '一', pinyin: 'yī', english: 'one', emoji: '1️⃣' },
  { id: 'n2', category: 'numbers', hanzi: '二', pinyin: 'èr', english: 'two', emoji: '2️⃣' },
  { id: 'n3', category: 'numbers', hanzi: '三', pinyin: 'sān', english: 'three', emoji: '3️⃣' },
  { id: 'n4', category: 'numbers', hanzi: '四', pinyin: 'sì', english: 'four', emoji: '4️⃣' },
  { id: 'n5', category: 'numbers', hanzi: '五', pinyin: 'wǔ', english: 'five', emoji: '5️⃣' },
  { id: 'n6', category: 'numbers', hanzi: '六', pinyin: 'liù', english: 'six', emoji: '6️⃣' },
  { id: 'n7', category: 'numbers', hanzi: '七', pinyin: 'qī', english: 'seven', emoji: '7️⃣' },
  { id: 'n8', category: 'numbers', hanzi: '八', pinyin: 'bā', english: 'eight', emoji: '8️⃣' },
  { id: 'n9', category: 'numbers', hanzi: '九', pinyin: 'jiǔ', english: 'nine', emoji: '9️⃣' },
  { id: 'n10', category: 'numbers', hanzi: '十', pinyin: 'shí', english: 'ten', emoji: '🔟' },
  { id: 'n11', category: 'numbers', hanzi: '一百', pinyin: 'yī bǎi', english: 'one hundred', emoji: '💯' },

  // Colors
  { id: 'c1', category: 'colors', hanzi: '红色', pinyin: 'hóng sè', english: 'red', emoji: '🔴' },
  { id: 'c2', category: 'colors', hanzi: '蓝色', pinyin: 'lán sè', english: 'blue', emoji: '🔵' },
  { id: 'c3', category: 'colors', hanzi: '黄色', pinyin: 'huáng sè', english: 'yellow', emoji: '🟡' },
  { id: 'c4', category: 'colors', hanzi: '绿色', pinyin: 'lǜ sè', english: 'green', emoji: '🟢' },
  { id: 'c5', category: 'colors', hanzi: '橙色', pinyin: 'chéng sè', english: 'orange', emoji: '🟠' },
  { id: 'c6', category: 'colors', hanzi: '紫色', pinyin: 'zǐ sè', english: 'purple', emoji: '🟣' },
  { id: 'c7', category: 'colors', hanzi: '粉色', pinyin: 'fěn sè', english: 'pink', emoji: '🩷' },
  { id: 'c8', category: 'colors', hanzi: '黑色', pinyin: 'hēi sè', english: 'black', emoji: '⚫' },
  { id: 'c9', category: 'colors', hanzi: '白色', pinyin: 'bái sè', english: 'white', emoji: '⚪' },
  { id: 'c10', category: 'colors', hanzi: '棕色', pinyin: 'zōng sè', english: 'brown', emoji: '🤎' },
  { id: 'c11', category: 'colors', hanzi: '灰色', pinyin: 'huī sè', english: 'gray', emoji: '🩶' },
  { id: 'c12', category: 'colors', hanzi: '金色', pinyin: 'jīn sè', english: 'gold', emoji: '🌟' },

  // Animals
  { id: 'a1', category: 'animals', hanzi: '猫', pinyin: 'māo', english: 'cat', emoji: '🐱' },
  { id: 'a2', category: 'animals', hanzi: '狗', pinyin: 'gǒu', english: 'dog', emoji: '🐶' },
  { id: 'a3', category: 'animals', hanzi: '鸟', pinyin: 'niǎo', english: 'bird', emoji: '🐦' },
  { id: 'a4', category: 'animals', hanzi: '鱼', pinyin: 'yú', english: 'fish', emoji: '🐟' },
  { id: 'a5', category: 'animals', hanzi: '兔子', pinyin: 'tù zi', english: 'rabbit', emoji: '🐰' },
  { id: 'a6', category: 'animals', hanzi: '熊猫', pinyin: 'xióng māo', english: 'panda', emoji: '🐼' },
  { id: 'a7', category: 'animals', hanzi: '老虎', pinyin: 'lǎo hǔ', english: 'tiger', emoji: '🐯' },
  { id: 'a8', category: 'animals', hanzi: '狮子', pinyin: 'shī zi', english: 'lion', emoji: '🦁' },
  { id: 'a9', category: 'animals', hanzi: '大象', pinyin: 'dà xiàng', english: 'elephant', emoji: '🐘' },
  { id: 'a10', category: 'animals', hanzi: '猴子', pinyin: 'hóu zi', english: 'monkey', emoji: '🐵' },
  { id: 'a11', category: 'animals', hanzi: '鸭子', pinyin: 'yā zi', english: 'duck', emoji: '🦆' },
  { id: 'a12', category: 'animals', hanzi: '马', pinyin: 'mǎ', english: 'horse', emoji: '🐴' },

  // Family
  { id: 'f1', category: 'family', hanzi: '妈妈', pinyin: 'mā ma', english: 'mom', emoji: '👩' },
  { id: 'f2', category: 'family', hanzi: '爸爸', pinyin: 'bà ba', english: 'dad', emoji: '👨' },
  { id: 'f3', category: 'family', hanzi: '哥哥', pinyin: 'gē ge', english: 'older brother', emoji: '👦' },
  { id: 'f4', category: 'family', hanzi: '姐姐', pinyin: 'jiě jie', english: 'older sister', emoji: '👧' },
  { id: 'f5', category: 'family', hanzi: '弟弟', pinyin: 'dì di', english: 'younger brother', emoji: '🧒' },
  { id: 'f6', category: 'family', hanzi: '妹妹', pinyin: 'mèi mei', english: 'younger sister', emoji: '👧' },
  { id: 'f7', category: 'family', hanzi: '爷爷', pinyin: 'yé ye', english: 'grandpa', emoji: '👴' },
  { id: 'f8', category: 'family', hanzi: '奶奶', pinyin: 'nǎi nai', english: 'grandma', emoji: '👵' },
  { id: 'f9', category: 'family', hanzi: '宝宝', pinyin: 'bǎo bao', english: 'baby', emoji: '👶' },
  { id: 'f10', category: 'family', hanzi: '家人', pinyin: 'jiā rén', english: 'family', emoji: '👨‍👩‍👧' },
  { id: 'f11', category: 'family', hanzi: '叔叔', pinyin: 'shū shu', english: 'uncle', emoji: '🧔' },
  { id: 'f12', category: 'family', hanzi: '阿姨', pinyin: 'ā yí', english: 'aunt', emoji: '👩' },

  // Food
  { id: 'fd1', category: 'food', hanzi: '米饭', pinyin: 'mǐ fàn', english: 'rice', emoji: '🍚' },
  { id: 'fd2', category: 'food', hanzi: '面条', pinyin: 'miàn tiáo', english: 'noodles', emoji: '🍜' },
  { id: 'fd3', category: 'food', hanzi: '饺子', pinyin: 'jiǎo zi', english: 'dumplings', emoji: '🥟' },
  { id: 'fd4', category: 'food', hanzi: '包子', pinyin: 'bāo zi', english: 'steamed bun', emoji: '🥮' },
  { id: 'fd5', category: 'food', hanzi: '水果', pinyin: 'shuǐ guǒ', english: 'fruit', emoji: '🍇' },
  { id: 'fd6', category: 'food', hanzi: '苹果', pinyin: 'píng guǒ', english: 'apple', emoji: '🍎' },
  { id: 'fd7', category: 'food', hanzi: '香蕉', pinyin: 'xiāng jiāo', english: 'banana', emoji: '🍌' },
  { id: 'fd8', category: 'food', hanzi: '水', pinyin: 'shuǐ', english: 'water', emoji: '💧' },
  { id: 'fd9', category: 'food', hanzi: '牛奶', pinyin: 'niú nǎi', english: 'milk', emoji: '🥛' },
  { id: 'fd10', category: 'food', hanzi: '鸡蛋', pinyin: 'jī dàn', english: 'egg', emoji: '🥚' },
  { id: 'fd11', category: 'food', hanzi: '面包', pinyin: 'miàn bāo', english: 'bread', emoji: '🍞' },
  { id: 'fd12', category: 'food', hanzi: '蛋糕', pinyin: 'dàn gāo', english: 'cake', emoji: '🎂' },

  // Body
  { id: 'b1', category: 'body', hanzi: '头', pinyin: 'tóu', english: 'head', emoji: '🗣️' },
  { id: 'b2', category: 'body', hanzi: '眼睛', pinyin: 'yǎn jing', english: 'eyes', emoji: '👀' },
  { id: 'b3', category: 'body', hanzi: '鼻子', pinyin: 'bí zi', english: 'nose', emoji: '👃' },
  { id: 'b4', category: 'body', hanzi: '嘴巴', pinyin: 'zuǐ ba', english: 'mouth', emoji: '👄' },
  { id: 'b5', category: 'body', hanzi: '耳朵', pinyin: 'ěr duo', english: 'ears', emoji: '👂' },
  { id: 'b6', category: 'body', hanzi: '手', pinyin: 'shǒu', english: 'hand', emoji: '✋' },
  { id: 'b7', category: 'body', hanzi: '脚', pinyin: 'jiǎo', english: 'foot', emoji: '🦶' },
  { id: 'b8', category: 'body', hanzi: '头发', pinyin: 'tóu fa', english: 'hair', emoji: '💇' },
  { id: 'b9', category: 'body', hanzi: '肚子', pinyin: 'dù zi', english: 'tummy', emoji: '🩷' },
  { id: 'b10', category: 'body', hanzi: '牙齿', pinyin: 'yá chǐ', english: 'teeth', emoji: '😁' },
  { id: 'b11', category: 'body', hanzi: '腿', pinyin: 'tuǐ', english: 'leg', emoji: '🦵' },
  { id: 'b12', category: 'body', hanzi: '胳膊', pinyin: 'gē bo', english: 'arm', emoji: '💪' },

  // School
  { id: 's1', category: 'school', hanzi: '学校', pinyin: 'xué xiào', english: 'school', emoji: '🏫' },
  { id: 's2', category: 'school', hanzi: '老师', pinyin: 'lǎo shī', english: 'teacher', emoji: '👩‍🏫' },
  { id: 's3', category: 'school', hanzi: '学生', pinyin: 'xué sheng', english: 'student', emoji: '🧑‍🎓' },
  { id: 's4', category: 'school', hanzi: '书', pinyin: 'shū', english: 'book', emoji: '📖' },
  { id: 's5', category: 'school', hanzi: '笔', pinyin: 'bǐ', english: 'pen', emoji: '🖊️' },
  { id: 's6', category: 'school', hanzi: '纸', pinyin: 'zhǐ', english: 'paper', emoji: '📄' },
  { id: 's7', category: 'school', hanzi: '书包', pinyin: 'shū bāo', english: 'backpack', emoji: '🎒' },
  { id: 's8', category: 'school', hanzi: '桌子', pinyin: 'zhuō zi', english: 'desk', emoji: '🪵' },
  { id: 's9', category: 'school', hanzi: '椅子', pinyin: 'yǐ zi', english: 'chair', emoji: '🪑' },
  { id: 's10', category: 'school', hanzi: '朋友', pinyin: 'péng you', english: 'friend', emoji: '🤝' },
  { id: 's11', category: 'school', hanzi: '上课', pinyin: 'shàng kè', english: 'class', emoji: '📚' },
  { id: 's12', category: 'school', hanzi: '写字', pinyin: 'xiě zì', english: 'write', emoji: '✍️' },
]

export function wordsFor(category: QuizCategory): Word[] {
  if (category === 'all') return WORDS
  return WORDS.filter((w) => w.category === category)
}

export function wordCountFor(category: CategoryId): number {
  return WORDS.filter((w) => w.category === category).length
}
