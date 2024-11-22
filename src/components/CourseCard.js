// src/components/CourseCard.js
import React, { useState } from 'react';
import { Lock, CheckCircle, Play } from 'lucide-react';

const CourseCard = ({ course, onStartLesson }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{course.title}</h2>
        <span className="text-gray-500">
          {expanded ? '-' : '+'}
        </span>
      </div>
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${course.color} transition-width duration-500`}
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">{course.progress}% Completo</span>
      </div>
      {expanded && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Lições</h3>
          <ul className="list-disc list-inside">
            {course.lessons.map((lesson, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className={lesson.locked ? 'text-gray-400' : 'text-gray-700'}>
                  {lesson.title}
                </span>
                {lesson.locked ? (
                  <Lock className="w-4 h-4 text-gray-400" />
                ) : lesson.completed ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <Play
                    className="w-4 h-4 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartLesson(lesson);
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
