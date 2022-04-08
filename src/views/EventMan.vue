<template>

<v-card>
    <br>
 
                <br>
     <h1> Welcome to the Event Management Section </h1>
    <v-card-title>
            <br>
           
            
                <br>
                    <br>
                        <br>
      <v-text-field
  
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    
    class="elevation-1"
  >
    <template v-slot:top>
      
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
              Add New Event
            </v-btn>
          </template>

          
          <v-card >
            <v-card-title>
              <span class="text-h5" > Add a new Event </span>
            </v-card-title>



            <v-card-text >
              
              <v-container>
                <br> 
<br>
              
                    <v-text-field 
                    name="Name of The Event"
                      v-model="editedItem.name"
                      label ="The Event's Name"
                      required
                    ></v-text-field>
              

<br>
              
    <v-container>
      
    
     
    
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="editedItem.date"
            label="Date of the Event"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="editedItem.date"
          no-title
          scrollable
        >
        
        </v-date-picker>
      </v-menu>
   </v-container>
                 
                   
                 <v-text-field
                 v-model="editedItem.email"
                label="Location"
                required
                ></v-text-field>
       
                    
                 <v-text-field
                 v-model="editedItem.email"
                label="Description.."
                required
                ></v-text-field>
                  
        


              </v-container>
            </v-card-text>

            <v-card-actions1>
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
            </v-card-actions1>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions1>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions1>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
   
 <template v-slot:[`item.actions0`]>
      
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
              Attendance
            </v-btn>
          </template>

          
          <v-card>
            <v-card-title>
              <span class="text-h5"> Make The Attendance</span>
            </v-card-title>



            <v-card-text>
              
              <v-container>
                <br> 
<br>
              
                    <v-text-field
                    name="Name of The Event"
                      v-model="editedItem.name"
                      label="Event X.."
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

            <v-card-actions1>
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
            </v-card-actions1>
          </v-card>
        </v-dialog>
     </template>

    <template v-slot:[`item.actions1`]="{ item }">
      
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
     </template>
     <template v-slot:[`item.actions2`]="{ item }">
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
    </v-card>
</template>





<script>


  export default {
    data: () => ({
    singleSelect: false,
        selected: [],
      dialog: false,
      dialogDelete: false,
      headers: [
        {
        text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        
      { text:'Date' , value: 'date', sortable: true },
       
        {  text:'Edit' , value: 'actions1', sortable: false },
        {  text:'Delete' , value: 'actions2', sortable: false },
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
  date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
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
            name: 'First Meeting',
            date: '2022-02-20'
          
          },
          {
            name: 'Second Meeting',
           date: '2022-02-25'
          },
          {
            name: 'Team Building',
         date: '2022-02-30'
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