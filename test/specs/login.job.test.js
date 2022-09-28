const LoginPage = require('../pageobjects/login.page');
const AdminPage = require('../pageobjects/admin.page');
const AddJob = require('../pageobjects/add.job.page');
const jobName = 'Nonlinear Scientist';

describe('Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
        await expect(AdminPage.userNameHeader).toHaveText('Admin');
    });
});

describe('Add new job', () => {
    it('should add a new job and save it', async () => {
        AddJob.pathToAddJob();
        AddJob.addNewJob(`${jobName}` , 'Description added', 'Note added', jobName);
        AddJob.saveNewJob();
        await expect(AddJob.jobSavedNotification).toExist();
    });

    it('should display the newly added job into the grid', async () => {
        const newJob = await $(`div=${jobName}`);
        await expect(newJob).toExist();
    }
    );
});



