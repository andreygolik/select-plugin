import './styles.scss'
import { Select } from './select'

const select = new Select('#select', {
  placeholder: 'Please select element',
  // selectedId: '1',
  data: [
    { id: '1', value: 'Angular' },
    { id: '2', value: 'React' },
    { id: '3', value: 'Vue' },
    { id: '5', value: 'Node' },
    { id: '6', value: 'Deno' },
    { id: '4', value: 'Express' },
  ],
  onSelect(item) {
    console.log('Selected Item:', item)
  },
})

// debug
window.s = select
