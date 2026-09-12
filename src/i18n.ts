import type { CategoryId, UiLang } from './types'

const copy = {
  appName: { en: 'Panda Pal', zh: '熊猫伙伴' },
  tagline: { en: 'Let’s learn Chinese together!', zh: '一起来学中文吧！' },
  hello: { en: '你好, friend!', zh: '你好，小朋友！' },
  pickPlay: { en: 'What do you want to play?', zh: '你想玩什么？' },
  flashcards: { en: 'Flashcards', zh: '识字卡片' },
  flashcardsHint: { en: 'See, flip, and hear words', zh: '看一看，翻一翻，听一听' },
  choice: { en: 'Pick the word', zh: '选一选' },
  choiceHint: { en: 'See a picture, choose Chinese', zh: '看图选中文' },
  match: { en: 'Match up', zh: '连连看' },
  matchHint: { en: 'Match Chinese with English', zh: '把中文和英文配对' },
  listen: { en: 'Listen & choose', zh: '听一听' },
  listenHint: { en: 'Hear a word, pick the meaning', zh: '听中文，选意思' },
  stars: { en: 'My stars', zh: '我的星星' },
  starsHint: { en: 'See your shiny progress', zh: '看看你的进步' },
  parents: { en: 'For parents', zh: '给家长' },
  back: { en: 'Back', zh: '返回' },
  home: { en: 'Home', zh: '首页' },
  pickCategory: { en: 'Pick a category', zh: '选一个主题' },
  mixAll: { en: 'Mix all words', zh: '全部单词' },
  mixAllHint: { en: 'A surprise mix from every topic', zh: '从所有主题里抽词' },
  next: { en: 'Next', zh: '下一张' },
  prev: { en: 'Back', zh: '上一张' },
  flip: { en: 'Tap the card to flip', zh: '点卡片可以翻面' },
  speak: { en: 'Hear Chinese', zh: '听中文' },
  speakUnavailable: {
    en: 'Sound isn’t available on this device. You can still read the words!',
    zh: '这台设备暂时不能发音，我们还可以一起读字哦！',
  },
  question: { en: 'Which Chinese word is this?', zh: '这是哪个中文词？' },
  listenQuestion: { en: 'What did Panda say?', zh: '熊猫说的是什么？' },
  playAgain: { en: 'Hear it again', zh: '再听一次' },
  tryAgain: { en: 'Almost! Try again.', zh: '很接近！再试一次。' },
  great: { en: 'Great job!', zh: '太棒了！' },
  awesome: { en: 'Awesome!', zh: '真棒！' },
  youDidIt: { en: 'You did it!', zh: '你做到了！' },
  keepGoing: { en: 'Keep going!', zh: '继续加油！' },
  nextQuestion: { en: 'Next question', zh: '下一题' },
  newRound: { en: 'New round', zh: '再来一轮' },
  matchHintPlay: { en: 'Tap a Chinese word, then its English meaning.', zh: '先点中文，再点英文意思。' },
  matched: { en: 'Matched!', zh: '配上了！' },
  wordsLearned: { en: 'Words learned', zh: '学会的词' },
  totalStars: { en: 'Stars', zh: '星星' },
  points: { en: 'Panda points', zh: '熊猫积分' },
  quizWins: { en: 'Practice wins', zh: '练习胜利' },
  encouraging: { en: 'You are a wonderful learner.', zh: '你是很棒的学习者。' },
  noHarsh: { en: 'Every try helps your brain grow.', zh: '每一次尝试，大脑都会变得更聪明。' },
  parentsTitle: { en: 'A note for parents', zh: '给家长的话' },
  parentsBody1: {
    en: 'Panda Pal is a playful Mandarin practice space for kids about 5–12. There is no login and nothing is sent to a server. Progress stays on this device in the browser.',
    zh: '熊猫伙伴是给大约5到12岁孩子的趣味中文练习。不用登录，也不会把数据发到网上。进度只保存在这台设备的浏览器里。',
  },
  parentsBody2: {
    en: 'Sit nearby for the first few sessions. Celebrate effort, ask your child to teach you a word, and keep sessions short and cheerful. Audio uses the device’s built-in Chinese voice when available.',
    zh: '前几次可以陪在旁边。多鼓励努力，让孩子教你一个词，时间短而开心就好。声音会使用设备自带的中文语音（如果有的话）。',
  },
  parentsBody3: {
    en: 'This is extra practice, not a full curriculum. Have fun together!',
    zh: '这是额外练习，不是完整课程。一起玩得开心！',
  },
  langToggleEn: { en: 'English', zh: 'English' },
  langToggleZh: { en: '简易中文', zh: '简易中文' },
  cardOf: { en: 'Card', zh: '卡片' },
  of: { en: 'of', zh: '/' },
  tapToReveal: { en: 'Tap to see the meaning', zh: '点一下看意思' },
  meaning: { en: 'Meaning', zh: '意思' },
  resetProgress: { en: 'Reset stars on this device', zh: '清空这台设备上的星星' },
  resetConfirm: { en: 'Reset stars and points on this device?', zh: '要清空这台设备上的星星和积分吗？' },
  yesReset: { en: 'Yes, reset', zh: '是的，清空' },
  cancel: { en: 'Keep them', zh: '先留着' },
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
