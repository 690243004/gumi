import globalMixin from '../../helper/mixins/global'
import { createNamespace } from '../../helper/util'
const _createNamespace = createNamespace('field')
const [createComponent, bem] = _createNamespace
import './index.scss'

export default createComponent({
  props: {
    alignRight: Boolean,
    autoFix: Boolean,
    border: Boolean,
    disabled: Boolean,
    label: String,
    password: Boolean,
    required: Boolean,
    textarea: Boolean,
    value: [String, Number]
  },
  computed: {
    placeholder() {
      return `请输入${this.label}`
    }
  },
  methods: {
    onInput(e) {
      if (this._events.input) {
        this.$emit('input', e.target.value)
      } else {
        this.$refs.inputRef.value = this.value || ''
      }
    },
    onTextAreaKeyup() {
      this.$refs.inputRef.style.height = this.$refs.inputRef.scrollHeight + 'px'
    }
  },
  mixins: [globalMixin],
  render(h) {
    const inputProps = {
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled
    }
    if (this.password) {
      inputProps.type = 'password'
    }
    const label = h(
      'div',
      {
        class: bem('label')
      },
      this.slot.label || this.label
    )

    let button
    if (this.slot.button) {
      button = h(
        'div',
        {
          class: bem('button')
        },
        [this.slot.button]
      )
    }

    let inputType
    const inputEvent = {
      on: this.onInput
    }
    if (this.textarea) {
      inputType = 'textarea'
      if (this.autoFix) {
        inputEvent.keyup = this.onTextAreaKeyup
      }
    } else {
      inputType = 'input'
    }
    return h(
      'div',
      {
        class:
          bem() +
          bem({
            border: this.border,
            required: this.required
          })
      },
      [
        label,
        h(inputType, {
          class: bem([
            inputType,
            {
              input__right: this.alignRight
            }
          ]),
          attrs: inputProps,
          on: inputEvent,
          ref: 'inputRef'
        }),
        button
      ]
    )
  }
})
