"use server"

import { auth } from "@/auth";
import { db } from "@/lib/db";



export const musicList = async () => {
  try {
    const user = await auth();
    const musiclist = await db.music.findMany({
    
    });

    const sortedMusicsList = musiclist
    .map(musiclist => ({
      title: musiclist.title,
      artist: musiclist.artist,
      link: musiclist.youtubeLink,
      tabs: musiclist.tabs,
      cover: musiclist.coverAlbum,
      tuning: musiclist.tuning,
      createdAt: musiclist.createdAt,
      updatedAt: musiclist.updatedAt,
      timeMin: musiclist.timeMinutes,
      timeSec: musiclist.timeSeconds,
      
    }))
    .sort((a, b) => b.timeMin - a.timeMin);
    return (sortedMusicsList)
  } catch (error) {
    return ('error ')
  }
}