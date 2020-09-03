export default {
  methods: {
    formatCode(codeString) {
      return codeString.replace(/^ {8}/gm, '').trim()
    }
  }
}