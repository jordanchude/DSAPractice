function mergeRanges(meetings) {

    // pseudocode
      // create copy of meetings array
      // sort array
      // initialize mergedMeetings array with first meeting
      // loop through meetings
        // if currentMeeting startTime is bigger than endTime of lastMergedMeeting
          // the end of lastMergedMeeting is max of current meeting and lastMergedMeeting
        // else
          // add current meeting to mergedMeetingsArray
      // return mergedMeeting array
      
      let meetingsCopy = JSON.parse(JSON.stringify(meetings));
      
      let sortedMeetings = meetingsCopy.sort((a,b) => {
        return a.startTime - b.startTime;
      })
      
      let mergedMeetings = [sortedMeetings[0]];
      
      for (let i = 0; i < sortedMeetings.length; i++) {
        let currentMeeting = sortedMeetings[i];
        let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
        
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
          lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
        } else {
          mergedMeetings.push(currentMeeting);
        }
      }
  
    return mergedMeetings;
  }