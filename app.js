const emoji = document.querySelector("#emoji");
const btn = document.querySelector(".click-me");
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
  "😎",
  "🤩",
  "🥳",
  "😝",
  "😜",
  "😋",
  "😚",
  "🤗",
  "🤫",
  "🤪",
  "😝",
  "😘",
  "😷",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🤯",
  "😱",
  "😰",
  "😥",
  "😓",
  "🙄",
  "🤨",
  "😑",
  "😶",
  "😐",
  "😦",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😞",
  "😖",
  "😩",
  "😫",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "😷",
  "🌝",
  "🌚",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌙",
  "🐵",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐙",
  "🐳",
  "🐬",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐊",
  "🐅",
  "🐴",
  "🐎",
  "🐆",
  "🐃",
  "🐄",
  "🐂",
  "🐏",
  "🐑",
  "🐐",
  "🐫",
  "🐘",
  "🐘",
  "🐘",
  "🐘",
  "🐇",
  "🐤",
  "🐓",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🦖",
  "🦕",
  "🐢",
  "🐍",
  "🦎",
  "🦂",
  "🦀",
  "🐻",
  "🦃",
  "🐆",
  "🐅",
  "🐪",
  "🐷",
  "🐗",
  "🐽",
  "🐴",
];

emoji.addEventListener("mouseover", () => {
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});

btn.addEventListener("click", () => {
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
