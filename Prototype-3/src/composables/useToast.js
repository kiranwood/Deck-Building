import { reactive } from 'vue'

const toast = reactive({ visible: false, message: '' })
let _timer = null

export function useToast() {
  function showToast(msg) {
    if (_timer) clearTimeout(_timer)
    toast.message = msg
    toast.visible = true
    _timer = setTimeout(() => { toast.visible = false }, 2600)
  }
  return { toast, showToast }
}
