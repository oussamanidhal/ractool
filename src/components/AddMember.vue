<template>


  <v-data-table
    :headers="headers"
    :items="desserts"
    
    class="elevation-1"
  >
    <template v-slot:top>
      <br> 
       
        <h1>   Club Members </h1> 
        <br>
      <v-toolbar
        flat
      >
       
        
        
        
        <v-spacer></v-spacer>
       
        
<br>
      
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
              <br>
            <v-btn
            permanent
           
              color="red lighten-2"
              dark
              
              v-bind="attrs"
              v-on="on"
            >
              Add New Member
            </v-btn>
          </template>

          
          <v-card>
            <v-card-title>
              <span class="text-h5"> Add a new Member </span>
            </v-card-title>



            <v-card-text>
              
              <v-container>
                <br> 
<br>
              
                    <v-text-field
                    name="Name"
                      v-model="editedItem.name"
                      label="name"
                      required
                    ></v-text-field>
              

<br>
              
        <v-text-field
          v-model="editedItem.phoneNumber"
          label="Phone Number"
          required
        ></v-text-field>
                 
                   
                 <v-text-field
                 v-model="editedItem.email"
                label="E-mail"
                required
                ></v-text-field>
       
                 
                  
        <v-select
          v-model="editedItem.position"
          :items="items"
          label="Position"
          data-vv-name="position"
          required
        ></v-select>
    


              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
     
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>





<script>


  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Phone Number', value: 'phoneNumber' },
        { text: 'E-mail', value: 'email' },
        { text: 'Position', value: 'position' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phoneNumber: null,
        email: '',
        posiiton: null,
      
      checkbox: null,
      },
      items: [
        'Secretaire',
        'trésorier',
        'Member',
        
      ],
      defaultItem: {
        name: '',
        phoneNumber: null,
        email: '',
        posiiton: null,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Slim Taktak',
            phoneNumber: 7155511,
            email: 'taktakslim2@gmail.com',
            position: 'Member',
          
          },
          {
            name: 'Slim Taktak2',
            phoneNumber: 7155511,
            email: 'taktakslim2@gmail.com',
            position: 'Member',
          },
          {
            name: 'Slim Taktak3',
            phoneNumber: 7155511,
            email: 'taktakslim2@gmail.com',
            position: 'Member',
          },
          
           
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>