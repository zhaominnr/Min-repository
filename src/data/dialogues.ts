import type { Dialogue } from '../types'

export const DIALOGUES: Dialogue[] = [
  {
    id: 'greetings',
    category: 'greetings',
    emoji: '👋',
    turns: [
      { id: 'g1', kind: 'tutor', line: { hanzi: '你好！我是熊猫。', pinyin: 'nǐ hǎo! wǒ shì xióng māo.', english: 'Hello! I am Panda.' } },
      { id: 'g2', kind: 'learner', line: { hanzi: '你好！', pinyin: 'nǐ hǎo!', english: 'Hello!' } },
      { id: 'g3', kind: 'tutor', line: { hanzi: '你叫什么名字？', pinyin: 'nǐ jiào shén me míng zi?', english: 'What is your name?' } },
      {
        id: 'g4',
        kind: 'choice',
        options: [
          { id: 'g4a', hanzi: '我叫小明。', pinyin: 'wǒ jiào xiǎo míng.', english: 'My name is Xiaoming.', correct: true },
          { id: 'g4b', hanzi: '我吃饺子。', pinyin: 'wǒ chī jiǎo zi.', english: 'I eat dumplings.', correct: false },
          { id: 'g4c', hanzi: '再见。', pinyin: 'zài jiàn.', english: 'Goodbye.', correct: false },
        ],
      },
      { id: 'g5', kind: 'tutor', line: { hanzi: '很高兴认识你。', pinyin: 'hěn gāo xìng rèn shi nǐ.', english: 'Nice to meet you.' } },
      { id: 'g6', kind: 'learner', line: { hanzi: '我也很高兴。', pinyin: 'wǒ yě hěn gāo xìng.', english: 'I am happy too.' } },
      { id: 'g7', kind: 'tutor', line: { hanzi: '你今天好吗？', pinyin: 'nǐ jīn tiān hǎo ma?', english: 'How are you today?' } },
      { id: 'g8', kind: 'learner', line: { hanzi: '我很好。', pinyin: 'wǒ hěn hǎo.', english: 'I am fine.' } },
      { id: 'g9', kind: 'tutor', line: { hanzi: '再见！', pinyin: 'zài jiàn!', english: 'Goodbye!' } },
      { id: 'g10', kind: 'learner', line: { hanzi: '再见！', pinyin: 'zài jiàn!', english: 'Goodbye!' } },
    ],
  },
  {
    id: 'family',
    category: 'family',
    emoji: '👨‍👩‍👧',
    turns: [
      { id: 'f1', kind: 'tutor', line: { hanzi: '这是谁？', pinyin: 'zhè shì shéi?', english: 'Who is this?' } },
      { id: 'f2', kind: 'learner', line: { hanzi: '这是我妈妈。', pinyin: 'zhè shì wǒ mā ma.', english: 'This is my mom.' } },
      { id: 'f3', kind: 'tutor', line: { hanzi: '爸爸呢？', pinyin: 'bà ba ne?', english: 'And dad?' } },
      {
        id: 'f4',
        kind: 'choice',
        options: [
          { id: 'f4a', hanzi: '这是我爸爸。', pinyin: 'zhè shì wǒ bà ba.', english: 'This is my dad.', correct: true },
          { id: 'f4b', hanzi: '这是红色。', pinyin: 'zhè shì hóng sè.', english: 'This is red.', correct: false },
          { id: 'f4c', hanzi: '我想喝水。', pinyin: 'wǒ xiǎng hē shuǐ.', english: 'I want water.', correct: false },
        ],
      },
      { id: 'f5', kind: 'tutor', line: { hanzi: '你有哥哥吗？', pinyin: 'nǐ yǒu gē ge ma?', english: 'Do you have an older brother?' } },
      { id: 'f6', kind: 'learner', line: { hanzi: '我有一个弟弟。', pinyin: 'wǒ yǒu yí ge dì di.', english: 'I have a little brother.' } },
      { id: 'f7', kind: 'tutor', line: { hanzi: '奶奶在家吗？', pinyin: 'nǎi nai zài jiā ma?', english: 'Is grandma at home?' } },
      { id: 'f8', kind: 'learner', line: { hanzi: '奶奶在家。', pinyin: 'nǎi nai zài jiā.', english: 'Grandma is at home.' } },
      { id: 'f9', kind: 'tutor', line: { hanzi: '你们一家人真好。', pinyin: 'nǐ men yì jiā rén zhēn hǎo.', english: 'Your family is lovely.' } },
      { id: 'f10', kind: 'learner', line: { hanzi: '谢谢。', pinyin: 'xiè xie.', english: 'Thank you.' } },
    ],
  },
  {
    id: 'food',
    category: 'food',
    emoji: '🥟',
    turns: [
      { id: 'fd1', kind: 'tutor', line: { hanzi: '你饿了吗？', pinyin: 'nǐ è le ma?', english: 'Are you hungry?' } },
      { id: 'fd2', kind: 'learner', line: { hanzi: '我饿了。', pinyin: 'wǒ è le.', english: 'I am hungry.' } },
      { id: 'fd3', kind: 'tutor', line: { hanzi: '你想吃什么？', pinyin: 'nǐ xiǎng chī shén me?', english: 'What do you want to eat?' } },
      {
        id: 'fd4',
        kind: 'choice',
        options: [
          { id: 'fd4a', hanzi: '我想吃饺子。', pinyin: 'wǒ xiǎng chī jiǎo zi.', english: 'I want to eat dumplings.', correct: true },
          { id: 'fd4b', hanzi: '我想看书。', pinyin: 'wǒ xiǎng kàn shū.', english: 'I want to read.', correct: false },
          { id: 'fd4c', hanzi: '这是蓝色。', pinyin: 'zhè shì lán sè.', english: 'This is blue.', correct: false },
        ],
      },
      { id: 'fd5', kind: 'tutor', line: { hanzi: '饺子很好吃。', pinyin: 'jiǎo zi hěn hǎo chī.', english: 'Dumplings are tasty.' } },
      { id: 'fd6', kind: 'learner', line: { hanzi: '我还想喝水。', pinyin: 'wǒ hái xiǎng hē shuǐ.', english: 'I also want water.' } },
      { id: 'fd7', kind: 'tutor', line: { hanzi: '你喜欢水果吗？', pinyin: 'nǐ xǐ huan shuǐ guǒ ma?', english: 'Do you like fruit?' } },
      { id: 'fd8', kind: 'learner', line: { hanzi: '我喜欢苹果。', pinyin: 'wǒ xǐ huan píng guǒ.', english: 'I like apples.' } },
      { id: 'fd9', kind: 'tutor', line: { hanzi: '请吃。', pinyin: 'qǐng chī.', english: 'Please eat.' } },
      { id: 'fd10', kind: 'learner', line: { hanzi: '谢谢。', pinyin: 'xiè xie.', english: 'Thank you.' } },
    ],
  },
  {
    id: 'school',
    category: 'school',
    emoji: '🎒',
    turns: [
      { id: 's1', kind: 'tutor', line: { hanzi: '早上好。', pinyin: 'zǎo shang hǎo.', english: 'Good morning.' } },
      { id: 's2', kind: 'learner', line: { hanzi: '老师好。', pinyin: 'lǎo shī hǎo.', english: 'Hello, teacher.' } },
      { id: 's3', kind: 'tutor', line: { hanzi: '你有书吗？', pinyin: 'nǐ yǒu shū ma?', english: 'Do you have a book?' } },
      {
        id: 's4',
        kind: 'choice',
        options: [
          { id: 's4a', hanzi: '我有书。', pinyin: 'wǒ yǒu shū.', english: 'I have a book.', correct: true },
          { id: 's4b', hanzi: '我有猫。', pinyin: 'wǒ yǒu māo.', english: 'I have a cat.', correct: false },
          { id: 's4c', hanzi: '我吃蛋糕。', pinyin: 'wǒ chī dàn gāo.', english: 'I eat cake.', correct: false },
        ],
      },
      { id: 's5', kind: 'tutor', line: { hanzi: '我们上课吧。', pinyin: 'wǒ men shàng kè ba.', english: "Let's start class." } },
      { id: 's6', kind: 'learner', line: { hanzi: '好的。', pinyin: 'hǎo de.', english: 'Okay.' } },
      { id: 's7', kind: 'tutor', line: { hanzi: '请写字。', pinyin: 'qǐng xiě zì.', english: 'Please write.' } },
      { id: 's8', kind: 'learner', line: { hanzi: '我喜欢写字。', pinyin: 'wǒ xǐ huan xiě zì.', english: 'I like to write.' } },
      { id: 's9', kind: 'tutor', line: { hanzi: '你有朋友吗？', pinyin: 'nǐ yǒu péng you ma?', english: 'Do you have a friend?' } },
      { id: 's10', kind: 'learner', line: { hanzi: '我有好朋友。', pinyin: 'wǒ yǒu hǎo péng you.', english: 'I have a good friend.' } },
    ],
  },
  {
    id: 'animals',
    category: 'animals',
    emoji: '🐼',
    turns: [
      { id: 'a1', kind: 'tutor', line: { hanzi: '你喜欢什么动物？', pinyin: 'nǐ xǐ huan shén me dòng wù?', english: 'What animal do you like?' } },
      { id: 'a2', kind: 'learner', line: { hanzi: '我喜欢熊猫。', pinyin: 'wǒ xǐ huan xióng māo.', english: 'I like pandas.' } },
      { id: 'a3', kind: 'tutor', line: { hanzi: '熊猫会吃竹子。', pinyin: 'xióng māo huì chī zhú zi.', english: 'Pandas eat bamboo.' } },
      {
        id: 'a4',
        kind: 'choice',
        options: [
          { id: 'a4a', hanzi: '我也喜欢猫。', pinyin: 'wǒ yě xǐ huan māo.', english: 'I also like cats.', correct: true },
          { id: 'a4b', hanzi: '我要睡觉。', pinyin: 'wǒ yào shuì jiào.', english: 'I want to sleep.', correct: false },
          { id: 'a4c', hanzi: '这是桌子。', pinyin: 'zhè shì zhuō zi.', english: 'This is a desk.', correct: false },
        ],
      },
      { id: 'a5', kind: 'tutor', line: { hanzi: '小猫说喵。', pinyin: 'xiǎo māo shuō miāo.', english: 'The cat says meow.' } },
      { id: 'a6', kind: 'learner', line: { hanzi: '小狗说汪汪。', pinyin: 'xiǎo gǒu shuō wāng wāng.', english: 'The dog says woof.' } },
      { id: 'a7', kind: 'tutor', line: { hanzi: '你看见鸟了吗？', pinyin: 'nǐ kàn jian niǎo le ma?', english: 'Did you see a bird?' } },
      { id: 'a8', kind: 'learner', line: { hanzi: '我看见一只鸟。', pinyin: 'wǒ kàn jian yì zhī niǎo.', english: 'I saw a bird.' } },
      { id: 'a9', kind: 'tutor', line: { hanzi: '你真聪明。', pinyin: 'nǐ zhēn cōng ming.', english: 'You are smart.' } },
      { id: 'a10', kind: 'learner', line: { hanzi: '谢谢。', pinyin: 'xiè xie.', english: 'Thank you.' } },
    ],
  },
  {
    id: 'colors',
    category: 'colors',
    emoji: '🎨',
    turns: [
      { id: 'c1', kind: 'tutor', line: { hanzi: '这是什么颜色？', pinyin: 'zhè shì shén me yán sè?', english: 'What color is this?' } },
      { id: 'c2', kind: 'learner', line: { hanzi: '这是红色。', pinyin: 'zhè shì hóng sè.', english: 'This is red.' } },
      { id: 'c3', kind: 'tutor', line: { hanzi: '你喜欢蓝色吗？', pinyin: 'nǐ xǐ huan lán sè ma?', english: 'Do you like blue?' } },
      {
        id: 'c4',
        kind: 'choice',
        options: [
          { id: 'c4a', hanzi: '我喜欢蓝色。', pinyin: 'wǒ xǐ huan lán sè.', english: 'I like blue.', correct: true },
          { id: 'c4b', hanzi: '我有哥哥。', pinyin: 'wǒ yǒu gē ge.', english: 'I have an older brother.', correct: false },
          { id: 'c4c', hanzi: '我想喝牛奶。', pinyin: 'wǒ xiǎng hē niú nǎi.', english: 'I want to drink milk.', correct: false },
        ],
      },
      { id: 'c5', kind: 'tutor', line: { hanzi: '太阳是黄色的。', pinyin: 'tài yang shì huáng sè de.', english: 'The sun is yellow.' } },
      { id: 'c6', kind: 'learner', line: { hanzi: '草是绿色的。', pinyin: 'cǎo shì lǜ sè de.', english: 'Grass is green.' } },
      { id: 'c7', kind: 'tutor', line: { hanzi: '雪是白色的。', pinyin: 'xuě shì bái sè de.', english: 'Snow is white.' } },
      { id: 'c8', kind: 'learner', line: { hanzi: '夜是黑色的。', pinyin: 'yè shì hēi sè de.', english: 'Night is black.' } },
      { id: 'c9', kind: 'tutor', line: { hanzi: '说得很好。', pinyin: 'shuō de hěn hǎo.', english: 'You said that well.' } },
      { id: 'c10', kind: 'learner', line: { hanzi: '谢谢老师。', pinyin: 'xiè xie lǎo shī.', english: 'Thank you, teacher.' } },
    ],
  },
]

export function dialogueById(id: string): Dialogue | undefined {
  return DIALOGUES.find((d) => d.id === id)
}
