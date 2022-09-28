class AddJob {
    
    get adminButton (){return $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a')}                                 
    get jobButton (){return $('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/span')}
    get jobTitlesButton (){return $('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[1]')}      
    get addJobButton (){return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button')}
    
    pathToAddJob (){
        this.adminButton.click();
        this.jobButton.click();
        this.jobTitlesButton.click();
        this.addJobButton.click();
    }

    get jobTitleInput (){return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input')}
    get jobDescriptionInput (){return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/textarea');}
    get jobNoteInput (){return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[2]/textarea')}
    get saveJobButton (){return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/button[2]')} 

    async addNewJob (jobTitleForm,jobDescriptionForm,JobNoteForm,jobName) {
        await this.jobTitleInput.setValue(jobTitleForm);
        browser.waitUntil(
            async () => (await this.jobTitleInput) === `${jobName}`,
            {
                timeout: 10000
            }
        );
        await this.jobDescriptionInput.setValue(jobDescriptionForm);
        await this.jobNoteInput.setValue(JobNoteForm);
        await this.saveJobButton.doubleClick();   
    }               

    async saveNewJob () {       
        await this.saveJobButton.doubleClick();     
    }

    get jobSavedNotification (){return $('//*[@id="oxd-toaster_1"]/div/div[1]/div[2]/p[1]')}     

}

module.exports = new AddJob();
