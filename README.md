**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# usermatters-vue

[![npm version](https://badgen.net/npm/v/usermatters-vue)](https://npm.im/usermatters-vue)

## Install

```bash
npm i usermatters-vue
```

## Usage

```vue
<script setup>
import { FeedbackPopup } from 'usermatters-vue'
</script>

<FeedbackPopup project="PROJECT_ID" v-slot="{ handleClick }">
  <button class="ml-20" @click="handleClick">feedback</button>
</FeedbackPopup>
```

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
