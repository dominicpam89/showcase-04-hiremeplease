import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs))
}

export async function delayUtil(del: number = 200) {
     return await new Promise((resolve) => {
          setTimeout(() => resolve(true), del)
     })
}

export async function delayRangeUtil(
     tMax: number = 3760,
     tMin: number = 2005
) {
     const randomTimer = Math.round(
          Math.random() * (tMax - tMin) + tMin
     )
     return new Promise((resolve) => {
          setTimeout(() => resolve(true), randomTimer)
     })
}

export function generateRandomId() {
     return Math.round(Math.random() * 31431)
}
