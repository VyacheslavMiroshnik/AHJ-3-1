export default function random(list) {
  const position = list[Math.floor(Math.random() * list.length)];
  return position;
}
