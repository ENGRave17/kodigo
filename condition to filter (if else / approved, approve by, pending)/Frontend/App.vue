<v-flex md2 style="padding:">
                <v-select
                  v-model="filterStatusType"
                  :items="filterStatusTypes"
                  label="Status Type"
                  :nudge-right="40"
                  offset-y
                  full-width
                  min-width="290px"
                  solo
                  clearable
                ></v-select>
              </v-flex>