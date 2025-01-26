import { PlayCircle, Radio, Video } from "lucide-react"

export const tabs = [
  {
    id: "advertisement",
    label: "Advertisement",
    icon: <Video className="w-5 h-5" />,
  },
  {
    id: "music",
    label: "Music",
    icon: <Radio className="w-5 h-5" />,
  },
  {
    id: "films",
    label: "Films",
    icon: <PlayCircle className="w-5 h-5" />,
  },
]
