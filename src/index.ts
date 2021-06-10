import { defineComponent, onBeforeUnmount, h, onMounted } from 'vue'
import { create } from 'usermatters-js'

export const FeedbackPopup = defineComponent({
  name: 'FeedbackPopup',

  inheritAttrs: false,

  props: {
    project: {
      type: String,
      required: true,
    },
    user: {
      type: String,
    },
    api: {
      type: String,
    },
  },

  setup(props, { slots }) {
    const instance = create()

    onMounted(() => {
      document.addEventListener('click', instance.handleDocumentClick)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', instance.handleDocumentClick)

      instance.destroy()
    })

    const handleClick = (e: any) => {
      instance.show(e.target, props)
    }

    return () => {
      if (!slots.default) {
        return h('usermatters-app', {
          ...props,
          open: true,
          inline: true,
        })
      }

      return slots.default({ handleClick })
    }
  },
})
