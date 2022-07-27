<template>
    <div class="product">
        <div class="name">{{ name }} </div>
        <input type="color" :value="colorCode" style="width:15%;" v-if="selManage === 'colors'" /> &nbsp;
        <div class="man">
            <div class="btn">
                <button class="button-42" @click="editClicked">Edit</button>
            </div>
            <div class="btn">
                <button class="button-42" @click="delClicked">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['name', 'id', 'sel-manage', 'colorCode'],
    methods: {
        editClicked() {
            const det = {
                id: this.id,
                name: this.name
            }
            this.$emit('editClicked', det);
        },
        async delClicked() {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDk2QGFiYyIsImlkIjoxOCwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1ODgzMzM0OCwiZXhwIjoxNjU4OTE5NzQ4fQ.KZgoBbsDKNtNLG-VjllZtFU4vTI3lMbdz8QsXWnCqfE'
            if (confirm('Are you sure you want to delete')) {
                let url = null
                let details = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                }
                if (this.selManage == 'categories') {
                    url = 'type/';
                }
                else if (this.selManage == 'sub categories') {
                    url = 'category/';
                    details = {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                    }
                }
                else if (this.selManage == 'groups') {
                    url = 'group/';
                }
                // name: this.newColour,
                //colorCode: this.colorCode
                const response = await fetch("http://localhost:6969/admin/delete/" + url + this.id, details);
                const data = await response.json();
                console.log(data);
                console.log('Thing was deleted.');
            }
        }
    }
}
</script>

<style scoped>
.product {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 15%;
    border: 1px solid black;
    padding: 1.5%;
    margin: 1% 0;
}

.man {
    display: flex;
    justify-content: space-around;
    width: 15%;
}

.btn button {
    padding: 0.5rem 1rem;
}
</style>