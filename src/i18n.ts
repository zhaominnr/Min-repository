import type { CategoryId, UiLang } from './types'

const copy = {
  appName: { en: 'Panda Pal', zh: '熊猫伙伴' },
  tagline: { en: 'Learn Chinese here.', zh: '在这里学中文。' },
  hello: { en: 'Hello.', zh: '你好。' },
  pickPlay: { en: 'Choose a game.', zh: '选一个游戏。' },
  flashcards: { en: 'Word cards', zh: '单词卡片' },
  flashcardsHint: { en: 'See a word. Tap to flip. Hear it.', zh: '看一个词。点卡片翻面。听一听。' },
  choice: { en: 'Choose the word', zh: '选词' },
  choiceHint: { en: 'Look at the picture. Choose the Chinese word.', zh: '看图。选出中文词。' },
  match: { en: 'Match words', zh: '配对' },
  matchHint: { en: 'Match the Chinese word to English.', zh: '把中文词和英文词配对。' },
  listen: { en: 'Listen and choose', zh: '听一听，选一选' },
  listenHint: { en: 'Hear a word. Choose what it means.', zh: '听一个词。选出它的意思。' },
  stars: { en: 'My stars', zh: '我的星星' },
  starsHint: { en: 'See your stars and words.', zh: '看你的星星和学会的词。' },
  parents: { en: 'For parents', zh: '给家长' },
  back: { en: 'Back', zh: '返回' },
  home: { en: 'Home', zh: '首页' },
  pickCategory: { en: 'Choose a topic.', zh: '选一个主题。' },
  mixAll: { en: 'All topics', zh: '全部主题' },
  mixAllHint: { en: 'Words from every topic.', zh: '从每个主题里选词。' },
  next: { en: 'Next', zh: '下一张' },
  prev: { en: 'Back', zh: '上一张' },
  flip: { en: 'Tap the card to see English.', zh: '点卡片，看英文。' },
  speak: { en: 'Hear Chinese', zh: '听中文' },
  speakUnavailable: {
    en: 'This device cannot speak. You can still read the words.',
    zh: '这台设备不能发音。你还可以看字。',
  },
  question: { en: 'Choose the Chinese word.', zh: '选出这个中文词。' },
  listenQuestion: { en: 'What word did you hear?', zh: '你听到了哪个词？' },
  playAgain: { en: 'Hear it again', zh: '再听一次' },
  tryAgain: { en: 'Almost. Try again.', zh: '差一点点。再试一次。' },
  tryAgainBtn: { en: 'Try again', zh: '再试一次' },
  great: { en: 'Good job!', zh: '做得好！' },
  awesome: { en: 'Nice work!', zh: '很好！' },
  youDidIt: { en: 'You did it!', zh: '你做到了！' },
  keepGoing: { en: 'Keep going.', zh: '继续。' },
  nextQuestion: { en: 'Next question', zh: '下一题' },
  newRound: { en: 'Play again', zh: '再玩一次' },
  matchHintPlay: { en: 'Tap a Chinese word. Then tap the English word.', zh: '先点一个中文词。再点英文词。' },
  matched: { en: 'They match.', zh: '它们是一对。' },
  wordsLearned: { en: 'Words you know', zh: '学会的词' },
  totalStars: { en: 'Stars', zh: '星星' },
  points: { en: 'Points', zh: '分数' },
  quizWins: { en: 'Right answers', zh: '答对的次数' },
  encouraging: { en: 'You are doing well.', zh: '你学得很好。' },
  noHarsh: { en: 'Each try helps you learn.', zh: '每次尝试都在帮你学习。' },
  parentsTitle: { en: 'For parents', zh: '给家长' },
  parentsBody1: {
    en: 'This app helps kids ages 5 to 12 practice Chinese. There is no login. Nothing is sent to the internet. Progress stays on this phone or computer.',
    zh: '这个应用帮助5到12岁的孩子练习中文。不用登录。不会把信息发到网上。进度只保存在这台手机或电脑上。',
  },
  parentsBody2: {
    en: 'Sit nearby the first few times. Praise effort. Ask your child to teach you a word. Keep practice short. Sound uses this device’s Chinese voice, if it has one.',
    zh: '前几次请坐在旁边。表扬孩子的努力。让孩子教你一个词。练习时间要短。声音使用这台设备的中文语音（如果有）。',
  },
  parentsBody3: {
    en: 'This is extra practice. It is not a full course.',
    zh: '这是额外练习。这不是完整课程。',
  },
  langToggleEn: { en: 'English', zh: 'English' },
  langToggleZh: { en: '简易中文', zh: '简易中文' },
  language: { en: 'Language', zh: '语言' },
  cardOf: { en: 'Card', zh: '卡片' },
  of: { en: 'of', zh: '/' },
  tapToReveal: { en: 'Tap to see English.', zh: '点一下看英文。' },
  meaning: { en: 'English', zh: '英文' },
  resetProgress: { en: 'Clear stars on this device', zh: '清空这台设备上的星星' },
  resetConfirm: { en: 'Clear stars and points on this device?', zh: '要清空这台设备上的星星和分数吗？' },
  yesReset: { en: 'Yes, clear them', zh: '是的，清空' },
  cancel: { en: 'No, keep them', zh: '不，留着' },
  wordCount: { en: 'words', zh: '个词' },
  chineseColumn: { en: 'Chinese words', zh: '中文词' },
  englishColumn: { en: 'English words', zh: '英文词' },
  categories: {
    greetings: { en: 'Greetings', zh: '问候' },
    numbers: { en: 'Numbers', zh: '数字' },
    colors: { en: 'Colors', zh: '颜色' },
    animals: { en: 'Animals', zh: '动物' },
    family: { en: 'Family', zh: '家人' },
    food: { en: 'Food', zh: '食物' },
    body: { en: 'Body', zh: '身体' },
    school: { en: 'School', zh: '学校' },
  } satisfies Record<CategoryId, { en: string; zh: string }>,
} as const

export type CopyKey = Exclude<keyof typeof copy, 'categories'>

export function t(lang: UiLang, key: CopyKey): string {
  return copy[key][lang]
}

export function categoryName(lang: UiLang, id: CategoryId): string {
  return copy.categories[id][lang]
}

export const CHEERS: CopyKey[] = ['great', 'awesome', 'youDidIt', 'keepGoing']
