import { ref } from 'vue'


const simData = ref('')

const getSimData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    // Assign JSON game file to variables
            simData.value = data.baseData
    console.log('GetSimData Function ran', simData.value)
            return { simData }
}


export default getSimData