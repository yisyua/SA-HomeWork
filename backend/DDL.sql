CREATE TABLE [Account] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(50) NOT NULL,
    [username] NVARCHAR(50) NOT NULL UNIQUE,
    [password] NVARCHAR(100) NOT NULL,
    [role] NVARCHAR(10) CHECK ([role] IN ('teacher', 'student')) NOT NULL,
    PRIMARY KEY ([id])
);

CREATE TABLE [Course] (
    [id] INT NOT NULL IDENTITY(1,1),
    [semester] NVARCHAR(20) NOT NULL,
    [education_system] NVARCHAR(50) NULL,
    [course_type] NVARCHAR(50) NULL,
    [session] NVARCHAR(10) NULL,
    [department] NVARCHAR(50) NULL,
    [grade] NVARCHAR(10) NULL,
    [course_code] NVARCHAR(20) NOT NULL UNIQUE,
    [instructor_id] INT NULL,
    [classroom] NVARCHAR(50) NULL,
    [capacity] INT NULL,
    PRIMARY KEY ([id])
);

CREATE TABLE [CourseEvaluation] (
    [id] INT NOT NULL IDENTITY(1,1),
    [course_id] INT NULL,
    [semester] NVARCHAR(20) NULL,
    [evaluation_content] NVARCHAR(MAX) NULL,
    [grading_method] NVARCHAR(MAX) NULL,
    [additional_notes] NVARCHAR(MAX) NULL,
    [submission_time] DATETIME NULL,
    [submitter_name] NVARCHAR(50) NULL,
    PRIMARY KEY ([id]),
    FOREIGN KEY ([course_id]) REFERENCES [Course] ([id])
);

CREATE TABLE [SystemFeedback] (
    [id] INT NOT NULL IDENTITY(1,1),
    [date] DATETIME NOT NULL,
    [issue_description] NVARCHAR(MAX) NOT NULL,
    PRIMARY KEY ([id])
);


-- 插入 Account 假資料
INSERT INTO [Account] ([name], [username], [password], [role])
VALUES
('Alice Johnson', 'alice', 'hashed_password123!', 'teacher'),
('Bob Smith', 'bob', 'hashed_password123!', 'student'),
('Charlie Brown', 'charlie', 'hashed_password123!', 'teacher'),
('David Lee', 'david', 'hashed_password123!', 'student'),
('Eve Davis', 'eve', 'hashed_password123!', 'student');

-- 插入 Course 假資料
INSERT INTO [Course] ([semester], [education_system], [course_type], [session], [department], [grade], [course_code], [instructor_id], [classroom], [capacity])
VALUES
('2024 Fall', 'Undergraduate', 'Core', 'Morning', 'Computer Science', '1', 'CS101', 1, 'Room A101', 50),
('2024 Fall', 'Undergraduate', 'Elective', 'Afternoon', 'Mathematics', '2', 'MATH201', 3, 'Room B203', 40),
('2024 Fall', 'Undergraduate', 'Core', 'Evening', 'Physics', '3', 'PHYS301', 1, 'Room C305', 30),
('2024 Spring', 'Graduate', 'Core', 'Morning', 'Engineering', '1', 'ENG401', 1, 'Room D401', 20),
('2024 Spring', 'Undergraduate', 'Elective', 'Afternoon', 'Biology', '2', 'BIO201', 3, 'Room E202', 35);

-- 插入 CourseEvaluation 假資料
INSERT INTO [CourseEvaluation] ([course_id], [semester], [evaluation_content], [grading_method], [additional_notes], [submission_time], [submitter_name])
VALUES
(1, '2024 Fall', 'Focus on problem-solving skills.', 'Homework: 40%, Exams: 60%', 'Group projects are optional.', '2024-12-01 09:00:00', 'Alice Johnson'),
(2, '2024 Fall', 'Includes advanced calculus topics.', 'Homework: 30%, Exams: 70%', 'Extra credit for participation.', '2024-12-01 10:00:00', 'Charlie Brown'),
(3, '2024 Fall', 'Physics principles and labs.', 'Labs: 50%, Exams: 50%', 'Lab safety is mandatory.', '2024-12-02 14:30:00', 'Alice Johnson'),
(4, '2024 Spring', 'Graduate level engineering topics.', 'Projects: 50%, Presentations: 50%', 'Team collaboration required.', '2024-12-03 16:00:00', 'Alice Johnson');

-- 插入 SystemFeedback 假資料
INSERT INTO [SystemFeedback] ([date], [issue_description])
VALUES
('2024-12-10 11:30:00', 'Unable to reset password for some accounts.'),
('2024-12-11 14:15:00', 'Course creation feature does not allow special characters in course codes.'),
('2024-12-12 09:45:00', 'Feedback submission time does not adjust for time zones.'),
('2024-12-13 17:00:00', 'System occasionally crashes during peak hours.'),
('2024-12-14 13:20:00', 'Data export feature generates corrupted files.');
