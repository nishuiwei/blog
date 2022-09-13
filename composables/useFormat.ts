export default () => {
	const formatTime = (compute_time: Date): any => {
		const new_date: number = new Date().getTime() //新建一个日期对象，默认现在的时间
		const old_date: number = new Date(compute_time).getTime() //设置过去的一个时间点，"yyyy-MM-dd HH:mm:ss"格式化日期

		const diff_time: number = (new_date - old_date) / 1000 //计算时间差,并把毫秒转换成秒
		const days: number = Math.floor(diff_time / 86400) // 天  24*60*60*1000
		const hours: number = Math.floor(diff_time / 3600) - 24 * days // 小时 60*60 总小时数-过去的小时数=现在的小时数
		const minutes: number = Math.floor((diff_time % 3600) / 60) // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
		const seconds: number = Math.floor(diff_time % 60)
		if (days) {
			return `${days} 天前`
		}
		if (hours) {
			return `${hours} 小时前`
		}
		if (minutes) {
			return `${minutes} 分钟前`
		}
		if (seconds) {
			return `${seconds} 秒前`
		}
	}

	return {
		formatTime,
	}
}
