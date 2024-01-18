
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔄️ SUBSTITUTION'],
    [47, '⚽ GOAL'],
    [61, '🔄 SUBSTITUTION'],
    [64, '🟨 YELLOW CARD'],
    [69, '🟥 RED CARD'],
    [70, '🔄️ SUBSTITUTION'],
    [72, '🔄️ SUBSTITUTION'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 YELLOW CARD'],
  ]);
  // 1
  const events = [...new Set(gameEvents.values())];
  console.log(events);

  // 2. 
  const eventsg = events.filter(([minute, event]) => minute !== 64);
  gameEvents.delete(64)
  // 3. 
  console.log(`1 sự kiện xảy ra, trung bình mỗi ${90/gameEvents.size} mitutes`);
const time =[...gameEvents.keys()].pop();
console.log(time);
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time/gameEvents.size} mitutes`);

  // 4. 
  for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST ' : 'SECOND ';
    console.log(`[${half}] ${min}: ${event}`);
  }