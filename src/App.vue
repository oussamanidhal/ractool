<template>
  <v-app>
    <v-app-bar 
    app
  
    permanent
      
      
      color="white"
     
    >
    

      <v-toolbar-title style=" font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 50px">RacTool</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      
    </v-app-bar>
 

 
    <div >
    <v-card>
   
    <v-navigation-drawer app
    style=" width: 255px"
        permanent
      >
       
    <v-list>
      <v-list-item link>
      <v-list-item-content>
      <v-list-item-title class="text-h6">
        RacTool Logo
      </v-list-item-title>
      </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item link
          :to= " '/' ">
            <v-list-item-icon>
              <v-icon>mdi-home-city</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
            
          </v-list-item>
          <v-list-item link
          :to= "'/Add-member'"
           >
            <v-list-item-icon>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Members Management</v-list-item-title>
          </v-list-item>
          <v-list-item link
          :to= " '/EventMan'">
            <v-list-item-icon>
              <v-icon>mdi-calendar-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Event Management</v-list-item-title>
          </v-list-item>
            <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-vote</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Voting</v-list-item-title>
          
          </v-list-item>
        </v-list>
      
    </v-navigation-drawer>
    
    </v-card>

    
    </div>

 
   <v-content >
      <router-view></router-view>
    </v-content>
 
  
  </v-app>

</template>

<script>

export default {
  name: 'App',
  
  data: () => ({
     appTitle: 'RacTool',
   
     user:false
     
  }),
};



</script>
