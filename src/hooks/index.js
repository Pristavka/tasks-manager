import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useTasks = selectedProject => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase.firestore().collection('task');
    }, [])
};
