export function roomKey(room) {
  if (!room || typeof room.groupId !== 'string' || !room.groupId.trim()
      || typeof room.roomId !== 'string' || !room.roomId.trim())
    throw new TypeError('Group and room IDs required');
  return JSON.stringify([room.groupId.trim(), room.roomId.trim()]);
}
