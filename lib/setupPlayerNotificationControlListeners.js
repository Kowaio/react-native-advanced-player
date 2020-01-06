import MusicControl from 'react-native-music-control'

type Methods = {
  onPlay: () => {},
  onPause: () => {},
  onStop: () => {},
  onRewind: (seconds: number) => {},
  onSeek: (seconds: number) => {},
}

export const setupPlayerNotificationControlListeners = (methods: Methods) => {
  const {
    onPlay,
    onPause,
    onStop,
    onRewind,
    onSeek,
    onPrevious,
    onNext,
    onTogglePlayback,
  } = methods
  MusicControl.on('play', () => {
    onPlay()
  })

  MusicControl.on('pause', () => {
    onPause()
  })

  MusicControl.on('previousTrack', () => {
    onPrevious()
  })
  MusicControl.on('nextTrack', () => {
    onNext()
  })

  MusicControl.on('skipForward', () => {
    onRewind(30)
  })

  MusicControl.on('skipBackward', () => {
    onRewind(-15)
  })

  MusicControl.on('seek', (pos) => {
    onSeek(pos)
  })

  MusicControl.on('togglePlayPause', () => {
    onTogglePlayback()
  }) // iOS only

  MusicControl.on('changePlaybackPosition', (pos) => {
    onSeek(pos)
  })

  MusicControl.on('closeNotification', () => {
    onStop()
    MusicControl.stopControl()
  }) // Android only
}
