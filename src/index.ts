import { defineComponent, onBeforeUnmount, h } from 'vue'
import { create } from 'usermatters-js'

export const UserMatters = defineComponent({
  name: 'UserMatters',

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

    const defaultSlot = slots.default

    onBeforeUnmount(() => {
      instance && instance.destroy()
    })

    if (!defaultSlot) {
      return () =>
        h('usermatters-app', {
          ...props,
          open: true,
        })
    }

    const handleClick = (e: any) => {
      instance.show(e.target, props)
    }

    return () => {
      return defaultSlot({ handleClick })
    }
  },
})
