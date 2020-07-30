import globalMixin from '../../helper/mixins/global'
import { createNamespace } from '../../helper/util'
const _createNamespace = createNamespace('field')
const [createComponent, bem] = _createNamespace
import './index.scss'

export default createComponent({
  props: {
    label: String,
    value: [String, Number],
    disabled: Boolean,
    password: Boolean,
    border: Boolean,
    alignRight: Boolean,
    required: Boolean,
    textarea: Boolean
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
        h(this.textarea ? 'textarea' : 'input', {
          class: bem([
            this.textarea ? 'textarea' : 'input',
            {
              input__right: this.alignRight
            }
          ]),
          attrs: inputProps,
          on: {
            input: this.onInput
          },
          ref: 'inputRef'
        }),
        button
      ]
    )
  }
})
